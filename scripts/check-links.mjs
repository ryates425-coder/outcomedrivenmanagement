import fs from "node:fs";
const html = fs.readFileSync("index.html", "utf8");
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
const links = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
const broken = links.filter(id => !ids.has(id));
if (broken.length) { console.error("Broken fragment links:", [...new Set(broken)]); process.exit(1); }
console.log(`Checked ${links.length} fragment links.`);
