import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.primeleed.com";

// ── Pages to NEVER include in sitemap ────────────────────────────────────────
const EXCLUDED = ["thank-you", "api", "_not-found"];

// ── Custom priority per route (default is 0.5) ────────────────────────────────
const PRIORITY: Record<string, number> = {
  "": 1.0,
  about: 0.8,
  academics: 0.8,
  "academics/overview": 0.7,
  "academics/education-consultancy": 0.7,
  "academics/undergraduate": 0.7,
  "academics/postgraduate": 0.7,
  admission: 0.8,
  "admission/overview": 0.7,
  "admission/how-to-apply": 0.7,
  blogs: 0.7,
  events: 0.6,
  faq: 0.6,
  contact: 0.6,
  privacy: 0.3,
  terms: 0.3,
  cookies: 0.3,
};

// ── Custom change frequency per route (default is 'monthly') ─────────────────
const FREQUENCY: Record<string, "weekly" | "monthly" | "yearly"> = {
  "": "weekly",
  blogs: "weekly",
  events: "weekly",
  privacy: "yearly",
  terms: "yearly",
  cookies: "yearly",
};

// ── Auto-discover all pages from /app folder ──────────────────────────────────
function getRoutes(dir: string, base = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    // Skip Next.js special folders, dynamic routes, and excluded pages
    if (
      name.startsWith("_") ||
      name.startsWith("(") ||
      name.startsWith("[") ||
      name === "api" ||
      EXCLUDED.includes(name)
    )
      continue;

    const route = base ? `${base}/${name}` : name;

    // Only include if folder has a page.tsx or page.ts
    const hasPage =
      fs.existsSync(path.join(dir, name, "page.tsx")) ||
      fs.existsSync(path.join(dir, name, "page.ts"));

    if (hasPage) routes.push(route);

    // Check subfolders recursively
    routes.push(...getRoutes(path.join(dir, name), route));
  }

  return routes;
}

// ── Generate sitemap ──────────────────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutes(appDir);

  // Always include homepage first
  const allRoutes = ["", ...routes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: FREQUENCY[route] ?? "monthly",
    priority: PRIORITY[route] ?? 0.5,
  }));
}
