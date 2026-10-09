import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 4175;
const baseUrl = `http://127.0.0.1:${port}`;
const candidates = [
  process.env.CHROMIUM_BIN,
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
].filter(Boolean);
const executablePath = candidates.find((candidate) => existsSync(candidate));
const pageOptions = { waitUntil: "domcontentloaded", timeout: 15_000 };

if (!executablePath) {
  throw new Error("No supported Chromium executable was found for navigation checks.");
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
  throw new Error("Vite preview did not start for navigation checks.");
}

async function expectAtTop(page, label) {
  await page.waitForTimeout(100);
  const scrollY = await page.evaluate(() => window.scrollY);
  if (scrollY > 2) {
    throw new Error(`${label} did not open at the top of the destination page.`);
  }
}

async function expectPath(page, pathname) {
  await page.waitForURL((url) => url.pathname === pathname);
  if (new URL(page.url()).pathname !== pathname) {
    throw new Error(`Expected ${pathname} but received ${new URL(page.url()).pathname}.`);
  }
}

async function expectNoHorizontalOverflow(page, route) {
  await page.goto(`${baseUrl}${route}`, pageOptions);
  const { viewport, scrollWidth } = await page.evaluate(() => ({
    viewport: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  if (scrollWidth > viewport + 1) {
    throw new Error(`${route} has ${scrollWidth - viewport}px of mobile horizontal overflow.`);
  }
}

const preview = spawn("pnpm", ["vite", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

try {
  await waitForServer();
  const browser = await chromium.launch({ executablePath, headless: true, args: ["--no-sandbox", "--disable-gpu"] });

  try {
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    desktop.setDefaultTimeout(10_000);
    await desktop.goto(`${baseUrl}/`, pageOptions);
    await desktop.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await desktop.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Projects", exact: true }).click();
    await expectPath(desktop, "/projects/");
    await expectAtTop(desktop, "Desktop menu navigation");

    await desktop.goto(`${baseUrl}/about/`, pageOptions);
    await desktop.getByRole("link", { name: "Prebaci na hrvatsku verziju" }).click();
    await expectPath(desktop, "/hr/about/");

    await desktop.goto(`${baseUrl}/hr/projects/`, pageOptions);
    await desktop.getByRole("link", { name: "Switch to the English version" }).click();
    await expectPath(desktop, "/projects/");

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    mobile.setDefaultTimeout(10_000);
    await mobile.goto(`${baseUrl}/`, pageOptions);
    await mobile.getByRole("button", { name: "Open navigation" }).click();
    await mobile.locator('.growth-mobile-panel a[href="/projects/"]').click();
    await expectPath(mobile, "/projects/");
    await expectAtTop(mobile, "Mobile menu navigation");

    const mobileRoutes = [
      "/", "/hr/", "/about/", "/hr/about/", "/projects/", "/hr/projects/", "/blog/", "/hr/blog/",
      "/post/the-illusion-of-ai-productivity/", "/hr/post/the-illusion-of-ai-productivity/",
      "/post/ai-search-visibility/", "/hr/post/ai-search-visibility/",
      "/post/website-migration-seo/", "/hr/post/website-migration-seo/",
      "/post/generative-engine-optimization/", "/hr/post/generative-engine-optimization/",
      "/contact/", "/hr/contact/", "/glossary/", "/hr/pojmovnik/",
      "/glossary/technical-seo/", "/hr/pojmovnik/tehnicki-seo/",
      "/glossary/entity-seo/", "/hr/pojmovnik/entitetski-seo/",
      "/glossary/ai-search-visibility/", "/hr/pojmovnik/vidljivost-u-ai-pretrazi/",
      "/glossary/generative-engine-optimization/", "/hr/pojmovnik/generativna-optimizacija/",
    ];

    for (const route of mobileRoutes) {
      await expectNoHorizontalOverflow(mobile, route);
    }

    await mobile.goto(`${baseUrl}/`, pageOptions);
    for (const selector of [".growth-section-intro-split", ".growth-thesis-grid", ".growth-proof-points", ".growth-footer-grid"]) {
      const columns = await mobile.locator(selector).first().evaluate((element) => getComputedStyle(element).gridTemplateColumns);
      if (columns.split(" ").length !== 1) {
        throw new Error(`${selector} must stack into a single column on mobile.`);
      }
    }
  } finally {
    await browser.close();
  }

  console.log("Navigation and language-switcher interaction checks passed.");
} finally {
  preview.kill("SIGTERM");
}
