import { spawn, spawnSync } from "node:child_process";
import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const update = process.argv.includes("--update");
const chromium = process.env.CHROMIUM_BIN || "chromium";
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;
const baselineDir = path.join(root, "tests", "visual-regression", "baselines");
const currentDir = path.join(root, "tests", "visual-regression", "current");
const captures = [
  { name: "home-desktop", route: "/", size: "1440,1000" },
  { name: "croatian-home-desktop", route: "/hr/", size: "1440,1000" },
  { name: "glossary-desktop", route: "/glossary/", size: "1440,1000" },
  { name: "projects-desktop", route: "/projects/", size: "1440,1000" },
  { name: "contact-desktop", route: "/contact/", size: "1440,1000" },
  { name: "home-mobile", route: "/", size: "390,844" },
  { name: "croatian-home-mobile", route: "/hr/", size: "390,844" },
  { name: "glossary-mobile", route: "/glossary/", size: "390,844" },
  { name: "projects-mobile", route: "/projects/", size: "390,844" },
  { name: "contact-mobile", route: "/contact/", size: "390,844" },
];

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed.`);
  }
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/glossary/`);
      if (response.ok) return;
    } catch {
      // The preview server has not started yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Vite preview did not start for visual regression checks.");
}

run("pnpm", ["vite", "build", "--base", "/"]);
await cp(path.join(root, "site-assets", "assets"), path.join(root, "dist", "public", "assets"), { recursive: true });
run("pnpm", ["exec", "tsx", "--tsconfig", "tsconfig.prerender.json", "scripts/prerender-static-routes.tsx"]);

const preview = spawn("pnpm", ["vite", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

try {
  await waitForServer();
  await rm(currentDir, { recursive: true, force: true });
  await mkdir(currentDir, { recursive: true });

  for (const capture of captures) {
    const output = path.join(currentDir, `${capture.name}.png`);
    const result = spawnSync(chromium, [
      "--headless",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--run-all-compositor-stages-before-draw",
      `--window-size=${capture.size}`,
      "--virtual-time-budget=2500",
      `--screenshot=${output}`,
      `${baseUrl}${capture.route}`,
    ], { cwd: root, stdio: "inherit" });

    if (result.status !== 0) {
      throw new Error(`Chromium could not capture ${capture.name}.`);
    }

    run("python3", ["scripts/optimize-visual-capture.py", output]);
  }

  if (update) {
    await rm(baselineDir, { recursive: true, force: true });
    await mkdir(path.dirname(baselineDir), { recursive: true });
    await cp(currentDir, baselineDir, { recursive: true });
    console.log(`Updated ${captures.length} visual baselines.`);
  } else {
    run("python3", ["scripts/compare-visuals.py", baselineDir, currentDir]);
  }
} finally {
  preview.kill("SIGTERM");
}
