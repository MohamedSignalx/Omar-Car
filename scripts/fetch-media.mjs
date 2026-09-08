#!/usr/bin/env node
/**
 * Pull campaign media from GitHub when the deploy bundle does not include
 * the large MP4s (Vercel file-deploy size limit). Local / Git clones skip.
 *
 * Tiny git files (favicon.svg is 227 bytes) MUST count as present. A >512
 * byte gate treated the icon as missing, then the LFS URL 404'd and the
 * whole Vercel build died.
 */
import { existsSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LFS =
  "https://media.githubusercontent.com/media/MohamedSignalx/Omar-Car/main/";
const RAW =
  "https://raw.githubusercontent.com/MohamedSignalx/Omar-Car/main/";

const FILES = [
  "public/og.jpg",
  "public/media/case-g70.jpg",
  "public/media/case-sonata.jpg",
  "public/media/elantra-lift.jpg",
  "public/media/k5-bay.jpg",
  "public/media/k5-tablet.jpg",
  "public/media/omar-portrait.jpg",
  "public/media/omar-workshop.jpg",
  "public/media/pack-accent.jpg",
  "public/media/pack-sonata.jpg",
  "public/media/shop-facade.jpg",
  "public/media/shop-night.jpg",
  "public/media/social-call.png",
  "public/media/social-maps.jpg",
  "public/media/social-snapchat.jpg",
  "public/media/social-tiktok.jpg",
  "public/media/social-whatsapp.jpg",
  "public/posters/floor-bay-2.jpg",
  "public/posters/floor-cabin.jpg",
  "public/posters/floor-case-g70.jpg",
  "public/posters/floor-cluster.jpg",
  "public/posters/floor-elantra.jpg",
  "public/posters/floor-engine.jpg",
  "public/posters/floor-g70.jpg",
  "public/posters/floor-intake.jpg",
  "public/posters/floor-k5-bay.jpg",
  "public/posters/floor-k5.jpg",
  "public/posters/floor-live.jpg",
  "public/posters/floor-omar-lift.jpg",
  "public/posters/floor-omar-talk.jpg",
  "public/posters/floor-rpm.jpg",
  "public/posters/floor-scan.jpg",
  "public/posters/floor-sonata.jpg",
  "public/posters/floor-tablet.jpg",
  "public/posters/floor-undercar.jpg",
  "public/posters/studio-baywalk.jpg",
  "public/posters/studio-consult.jpg",
  "public/posters/studio-greeting.jpg",
  "public/posters/studio-handover.jpg",
  "public/posters/studio-portrait.jpg",
  "public/posters/studio-scan.jpg",
  "public/posters/studio-story-consult.jpg",
  "public/posters/studio-talk.jpg",
  "public/videos/bay-k5.mp4",
  "public/videos/case-g70.mp4",
  "public/videos/case-sonata.mp4",
  "public/videos/floor-bay-2.mp4",
  "public/videos/floor-cabin.mp4",
  "public/videos/floor-cluster.mp4",
  "public/videos/floor-elantra.mp4",
  "public/videos/floor-engine.mp4",
  "public/videos/floor-g70.mp4",
  "public/videos/floor-intake.mp4",
  "public/videos/floor-k5.mp4",
  "public/videos/floor-live.mp4",
  "public/videos/floor-omar-lift.mp4",
  "public/videos/floor-omar-talk.mp4",
  "public/videos/floor-rpm.mp4",
  "public/videos/floor-scan.mp4",
  "public/videos/floor-sonata.mp4",
  "public/videos/floor-tablet.mp4",
  "public/videos/floor-undercar.mp4",
  "public/videos/intake-flatbed.mp4",
  "public/videos/omar-talk.mp4",
  "public/videos/studio-baywalk.mp4",
  "public/videos/studio-consult.mp4",
  "public/videos/studio-greeting.mp4",
  "public/videos/studio-handover.mp4",
  "public/videos/studio-portrait.mp4",
  "public/videos/studio-scan.mp4",
  "public/videos/studio-story-consult.mp4",
  "public/videos/studio-talk.mp4",
];

function present(rel) {
  const dest = join(ROOT, rel);
  try {
    return existsSync(dest) && statSync(dest).size > 0;
  } catch {
    return false;
  }
}

async function tryFetch(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  return buf.length > 0 ? buf : null;
}

async function pull(rel) {
  const dest = join(ROOT, rel);
  mkdirSync(dirname(dest), { recursive: true });
  const buf = (await tryFetch(LFS + rel)) || (await tryFetch(RAW + rel));
  if (buf) {
    writeFileSync(dest, buf);
    process.stdout.write(`  ${rel}\n`);
    return;
  }
  if (present(rel)) {
    process.stdout.write(`  ${rel} (kept local)\n`);
    return;
  }
  console.warn(`[fetch-media] skip ${rel} (not on GitHub)`);
}

const missing = FILES.filter((rel) => !present(rel));
if (missing.length === 0) {
  console.log("[fetch-media] local media present — skip");
  process.exit(0);
}

console.log(`[fetch-media] downloading ${missing.length} files from GitHub`);
for (const rel of missing) {
  await pull(rel);
}
console.log("[fetch-media] done");
