import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { extname, join } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname;
const OUT =
  "/tmp/claude-0/-home-user-thewaybackcommunity/e5bdbebb-6cef-58c4-9213-461dc5f3980d/scratchpad";
mkdirSync(OUT, { recursive: true });

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".svg": "image/svg+xml",
};

const server = createServer((req, res) => {
  let path = join(DIST, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  if (!existsSync(path)) path = join(DIST, "index.html");
  res.writeHead(200, { "content-type": MIME[extname(path)] || "application/octet-stream" });
  res.end(readFileSync(path));
});
await new Promise((r) => server.listen(4173, r));

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});

for (const [name, viewport] of [
  ["mobile-375", { width: 375, height: 812 }],
  ["desktop-1280", { width: 1280, height: 900 }],
]) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto("http://localhost:4173/", { waitUntil: "networkidle" });
  // let reveal-on-scroll fire everywhere: scroll to bottom, then back to top
  await page.evaluate(async () => {
    await new Promise((done) => {
      let y = 0;
      const step = () => {
        y += 600;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 60);
        else done();
      };
      step();
    });
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${name}-fold.png` });
  await page.screenshot({ path: `${OUT}/${name}-full.png`, fullPage: true });
  await context.close();
  console.log(`captured ${name}`);
}

await browser.close();
server.close();
