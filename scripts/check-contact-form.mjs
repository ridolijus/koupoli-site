import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 4176;
const baseUrl = `http://127.0.0.1:${port}`;
const endpoint = "https://formspree.io/f/xgaokqng";
const executablePath = [process.env.CHROMIUM_BIN, "/usr/bin/chromium", "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable"].filter(Boolean).find(existsSync);

if (!executablePath) throw new Error("No supported Chromium executable was found for enquiry checks.");

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/contact/`);
      if (response.ok) return;
    } catch {
      // The preview server has not started yet.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Vite preview did not start for enquiry checks.");
}

async function fillRequiredFields(page) {
  await page.locator('input[name="name"]').fill("Test visitor");
  await page.locator('input[name="email"]').fill("test@example.com");
  await page.locator('textarea[name="business"]').fill("Example company");
  await page.locator('textarea[name="goal"]').fill("More qualified organic leads");
  await page.locator('textarea[name="constraint"]').fill("Technical SEO backlog");
}

const preview = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"], {
  cwd: root,
  stdio: "ignore",
});

try {
  await waitForServer();
  const browser = await chromium.launch({ executablePath, headless: true, args: ["--no-sandbox", "--disable-gpu"] });

  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    page.setDefaultTimeout(10_000);

    await page.route(endpoint, async (route) => {
      await route.fulfill({ contentType: "application/json", status: 200, body: JSON.stringify({ next: "/thanks" }) });
    });
    await page.goto(`${baseUrl}/contact/`, { waitUntil: "domcontentloaded" });
    await fillRequiredFields(page);
    await page.getByRole("button", { name: "Send enquiry" }).click();
    await page.getByRole("status").waitFor();
    if (!(await page.getByRole("status").textContent())?.includes("your enquiry has been sent")) {
      throw new Error("English enquiry success state did not render.");
    }

    await page.unroute(endpoint);
    await page.route(endpoint, async (route) => {
      await route.fulfill({ contentType: "application/json", status: 422, body: JSON.stringify({ errors: [{ message: "Invalid submission" }] }) });
    });
    await page.goto(`${baseUrl}/hr/contact/`, { waitUntil: "domcontentloaded" });
    await fillRequiredFields(page);
    await page.getByRole("button", { name: "Pošaljite upit" }).click();
    await page.getByRole("alert").waitFor();
    if (!(await page.getByRole("alert").textContent())?.includes("nije moguće poslati")) {
      throw new Error("Croatian enquiry error state did not render.");
    }
  } finally {
    await browser.close();
  }

  console.log("Formspree enquiry success and failure states passed.");
} finally {
  preview.kill("SIGTERM");
  await Promise.race([
    once(preview, "exit"),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ]);
  if (preview.exitCode === null) preview.kill("SIGKILL");
}
