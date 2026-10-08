import { spawn, spawnSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 4174;
const baseUrl = `http://127.0.0.1:${port}`;
const reportDir = path.join(root, "tests", "lighthouse", "current");
const minimumScore = Number(process.env.LIGHTHOUSE_MIN_SCORE ?? "0.6");
const pages = [
  { name: "home", route: "/" },
  { name: "glossary", route: "/glossary/" },
];

function run(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: "inherit", timeout: 120_000, killSignal: "SIGTERM" });
  if (result.error?.code === "ETIMEDOUT") {
    throw new Error(`${command} ${args.join(" ")} timed out after 120 seconds.`);
  }
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed.`);
  }
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The preview server has not started yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Vite preview did not start for Lighthouse.");
}

await rm(reportDir, { recursive: true, force: true });
await mkdir(reportDir, { recursive: true });

const preview = spawn("pnpm", ["vite", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

try {
  await waitForServer();
  const scores = [];

  for (const page of pages) {
    const report = path.join(reportDir, `${page.name}.json`);
    run("pnpm", [
      "exec",
      "lighthouse",
      `${baseUrl}${page.route}`,
      "--quiet",
      "--no-enable-error-reporting",
      "--only-categories=performance",
      "--output=json",
      `--output-path=${report}`,
      "--form-factor=mobile",
      "--screenEmulation.mobile=true",
      "--chrome-flags=--headless --no-sandbox --disable-gpu",
    ]);

    const result = JSON.parse(await (await import("node:fs/promises")).readFile(report, "utf8"));
    const score = result.categories.performance.score;
    scores.push({ name: page.name, score });
  }

  for (const { name, score } of scores) {
    console.log(`${name}: ${Math.round(score * 100)}/100`);
  }

  const failures = scores.filter(({ score }) => score < minimumScore);
  if (failures.length) {
    throw new Error(`Lighthouse performance budget failed. Required score: ${Math.round(minimumScore * 100)}.`);
  }

  console.log(`Lighthouse performance budget passed at ${Math.round(minimumScore * 100)} or above.`);
} finally {
  preview.kill("SIGTERM");
}
