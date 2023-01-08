import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.locator('a[class="getStarted_Sjon"]').click();
  await page.waitForTimeout(10000);

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
