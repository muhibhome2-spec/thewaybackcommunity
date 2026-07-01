import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const URL =
  "https://www.skool.com/claudecodeprofitroom/about?utm_source=skooldotcom&utm_medium=website&utm_campaign=discovery_browse_group_link";

const OUT =
  "/tmp/claude-0/-home-user-thewaybackcommunity/e5bdbebb-6cef-58c4-9213-461dc5f3980d/scratchpad";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const context = await browser.newContext({
  viewport: { width: 1280, height: 900 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
});
const page = await context.newPage();

let status = "ok";
try {
  const resp = await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 45000 });
  status = `http ${resp?.status()}`;
} catch (e) {
  status = `error ${e.message}`;
}
console.log("STATUS:", status);
await page.waitForTimeout(4000);

await page.screenshot({ path: `${OUT}/skool-fold.png`, fullPage: false });
await page.screenshot({ path: `${OUT}/skool-full.png`, fullPage: true });

const outline = await page.evaluate(() => {
  // Only surface structural blocks (large, visible) so we get the layout skeleton
  const seen = new WeakSet();
  const rows = [];
  const push = (n) => {
    if (seen.has(n)) return;
    seen.add(n);
    const r = n.getBoundingClientRect();
    if (r.width < 240 || r.height < 40) return;
    if (rows.length >= 60) return;
    rows.push({
      tag: n.tagName.toLowerCase(),
      w: Math.round(r.width),
      h: Math.round(r.height),
      x: Math.round(r.left),
      y: Math.round(r.top + window.scrollY),
      text: (n.innerText || "").trim().replace(/\s+/g, " ").slice(0, 100),
    });
  };
  const walk = (n, d = 0) => {
    if (d > 6) return;
    for (const c of n.children || []) {
      push(c);
      walk(c, d + 1);
    }
  };
  walk(document.body);
  return rows;
});
console.log("OUTLINE_START");
console.log(JSON.stringify(outline, null, 2));
console.log("OUTLINE_END");

const heading = await page.evaluate(() => {
  const titles = [...document.querySelectorAll("h1, h2, h3")].slice(0, 12).map((h) => ({
    tag: h.tagName.toLowerCase(),
    text: (h.innerText || "").trim().replace(/\s+/g, " ").slice(0, 90),
  }));
  return titles;
});
console.log("HEADINGS:", JSON.stringify(heading, null, 2));

await browser.close();
