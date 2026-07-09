import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');
  await page.getByRole('link', { name: 'T-Shirts', exact: true }).click();
});