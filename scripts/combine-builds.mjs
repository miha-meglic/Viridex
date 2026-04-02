import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.dirname(__dirname);

const docusaurusOut = path.join(rootDir, "books", "build");
const astroOut = path.join(rootDir, "website", "dist");
const learnDir = path.join(astroOut, "learn");

// Create learn directory if it doesn't exist
if (!fs.existsSync(learnDir)) {
  fs.mkdirSync(learnDir, { recursive: true });
}

// Copy Docusaurus build to learn directory
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory not found: ${src}`);
    process.exit(1);
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.statSync(srcFile).isDirectory()) {
      copyRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

try {
  copyRecursive(docusaurusOut, learnDir);
  console.log(
    `✓ Successfully combined builds: Docusaurus copied to ${learnDir}`,
  );
} catch (error) {
  console.error("Error combining builds:", error);
  process.exit(1);
}
