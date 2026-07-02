import { chromium } from "playwright-core";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { extname, join } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname;
const OUT =
  "/tmp/claude-0/-home-user-thewaybackcommunity/e5bdbebb-6cef-58c4-9213-461dc5f3980d/scratchpad";
mkdirSync(OUT, { recursive: true });

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".woff": "font/woff" };
const server = createServer((req, res) => {
  let path = join(DIST, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  if (!existsSync(path)) path = join(DIST, "index.html");
  res.writeHead(200, { "content-type": MIME[extname(path)] || "application/octet-stream" });
  res.end(readFileSync(path));
});
await new Promise((r) => server.listen(4175, r));

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
await page.goto("http://localhost:4175/", { waitUntil: "networkidle" });

// kill smooth scrolling for deterministic capture
await page.addStyleTag({ content: "html{scroll-behavior:auto!important}" });

// reveal everything
await page.evaluate(async () => {
  await new Promise((done) => {
    let y = 0;
    const step = () => {
      y += 500;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 40);
      else done();
    };
    step();
  });
});
await page.waitForTimeout(500);

const joinEl = page.locator("#join");
await joinEl.scrollIntoViewIfNeeded();
await page.waitForTimeout(700);

// computed styles of card content
const diag = await page.evaluate(() => {
  const aside = document.getElementById("join");
  const card = aside?.firstElementChild;
  const price = aside?.querySelector("span");
  const cs = (el) => {
    if (!el) return null;
    const s = getComputedStyle(el);
    return { opacity: s.opacity, visibility: s.visibility, display: s.display, transform: s.transform };
  };
  return {
    aside: cs(aside),
    card: cs(card),
    childCount: card?.children.length,
    text: aside?.innerText?.slice(0, 120),
  };
});
console.log(JSON.stringify(diag, null, 2));

await page.screenshot({ path: `${OUT}/joincard-recheck.png` });
await browser.close();
server.close();
