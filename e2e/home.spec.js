// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Check that Title exists (SEO)
  await expect(page).toHaveTitle(/\S/);
});

test('Structure: Every section must have a heading', async ({ page }) => {
  await page.goto('/');

  // Find all <section> tags
  const sections = page.locator('section');
  const count = await sections.count();

  for (let i = 0; i < count; i++) {
    const section = sections.nth(i);

    // Use .count() instead of .toBeVisible() in case of sr-only headings
    const headingCount = await section.locator('h1, h2, h3, h4, h5, h6').count();

    expect(headingCount, `Section #${i + 1} is missing a heading!`).toBeGreaterThan(0);
  }
});
