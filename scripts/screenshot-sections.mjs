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
};
const server = createServer((req, res) => {
  let path = join(DIST, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  if (!existsSync(path)) path = join(DIST, "index.html");
  res.writeHead(200, { "content-type": MIME[extname(path)] || "application/octet-stream" });
  res.end(readFileSync(path));
});
await new Promise((r) => server.listen(4174, r));

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
await page.goto("http://localhost:4174/", { waitUntil: "networkidle" });

// force-reveal everything and settle
await page.evaluate(async () => {
  await new Promise((done) => {
    let y = 0;
    const step = () => {
      y += 500;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 50);
      else done();
    };
    step();
  });
});
await page.waitForTimeout(600);

// capture each labelled section area
const sections = await page.evaluate(() =>
  [...document.querySelectorAll("section, aside, header#top")].map((el, i) => {
    const r = el.getBoundingClientRect();
    return {
      i,
      label:
        el.getAttribute("aria-label") ||
        el.getAttribute("aria-labelledby") ||
        el.id ||
        el.tagName.toLowerCase() + i,
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height),
    };
  }),
);
console.log(JSON.stringify(sections, null, 2));

for (const s of sections) {
  if (s.height < 40) continue;
  await page.evaluate((top) => window.scrollTo(0, Math.max(0, top - 40)), s.top);
  await page.waitForTimeout(350);
  const name = s.label.replace(/[^a-z0-9-]/gi, "_").slice(0, 32);
  await page.screenshot({ path: `${OUT}/sec-${s.i}-${name}.png` });
}

await browser.close();
server.close();
