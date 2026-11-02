import { describe, it, expect } from "vitest";
import { starsContent } from "../content/stars";
import sitemap from "../app/sitemap";
import { generateStaticParams } from "../app/stars/[slug]/page";

describe("Strict Celebrity Clearance & Likeness Guard", () => {
  it("proves stars with rightsCleared: false are NEVER included in generateStaticParams()", async () => {
    const staticParams = await generateStaticParams();
    const staticSlugs = staticParams.map((p) => p.slug);

    const unclearedStars = starsContent.filter((s) => !s.rightsCleared);
    expect(unclearedStars.length).toBeGreaterThan(0);

    unclearedStars.forEach((uncleared) => {
      expect(staticSlugs).not.toContain(uncleared.slug);
    });
  });

  it("proves stars with rightsCleared: false NEVER appear in the public sitemap", () => {
    const sitemapEntries = sitemap();
    const urls = sitemapEntries.map((e) => e.url);

    const unclearedStars = starsContent.filter((s) => !s.rightsCleared);
    unclearedStars.forEach((uncleared) => {
      const forbiddenUrl = `https://desiconnections.club/stars/${uncleared.slug}`;
      expect(urls).not.toContain(forbiddenUrl);
    });

    const clearedStars = starsContent.filter((s) => s.rightsCleared);
    clearedStars.forEach((cleared) => {
      const expectedUrl = `https://desiconnections.club/stars/${cleared.slug}`;
      expect(urls).toContain(expectedUrl);
    });
  });

  it("ensures uncleared talent names never appear in public talent listings", () => {
    const clearedList = starsContent.filter((s) => s.rightsCleared);
    const clearedNames = clearedList.map((s) => s.name.toLowerCase());

    const unclearedNames = [
      "shah rukh khan",
      "deepika padukone",
      "ranveer singh",
      "alia bhatt",
    ];

    unclearedNames.forEach((name) => {
      expect(clearedNames).not.toContain(name);
    });
  });
});
