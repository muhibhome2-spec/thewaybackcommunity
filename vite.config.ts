import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite serves at `/` for local dev. When built inside GitHub Actions
 * (where GITHUB_ACTIONS=true), assets are prefixed with the repo path
 * so they resolve correctly on the project Pages URL
 * https://<owner>.github.io/thewaybackcommunity/.
 */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGithubActions ? "/thewaybackcommunity/" : "/",
  plugins: [react()],
  build: {
    target: "es2020",
  },
});
