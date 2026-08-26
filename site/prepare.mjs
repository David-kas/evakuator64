import { cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");

const dirs = ["app", "components", "lib", "public"];
const files = [
  "next.config.ts",
  "tsconfig.json",
  "postcss.config.mjs",
  "eslint.config.mjs",
];

for (const name of dirs) {
  const from = join(root, name);
  if (!existsSync(from)) {
    console.error(`Missing ${from}`);
    process.exit(1);
  }
  cpSync(from, join(here, name), { recursive: true });
}

for (const name of files) {
  const from = join(root, name);
  if (existsSync(from)) cpSync(from, join(here, name));
}

console.log("Prepared Next.js app inside site/ for Vercel Root Directory.");
