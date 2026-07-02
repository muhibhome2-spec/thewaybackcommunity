import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Self-hosted, per-weight font imports. Faster than a Google Fonts
// <link> (no third-party origin, no render-blocking cross-origin
// request chain) — the browser fetches these from the same origin as
// everything else, hashed and cached alongside the rest of the build.
//
// Schibsted Grotesk has no 300 (light) weight in any release —
// verified against both the static and variable Fontsource packages
// (variable axis is 400–900). The old Google Fonts link requested 300
// anyway; the browser was silently substituting 400 the entire time.
// Only the weights that actually exist are imported here.
//
// Latin-only subset files: this is an English-language page, so the
// Cyrillic/Greek/Vietnamese/etc. subsets that ship in the default
// per-weight files are pure dead weight — importing them added ~14 KB
// gzipped of unused @font-face declarations.
import "@fontsource/schibsted-grotesk/latin-400.css";
import "@fontsource/schibsted-grotesk/latin-500.css";
import "@fontsource/schibsted-grotesk/latin-600.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-500.css";

import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
