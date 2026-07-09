import { test } from '@playwright/test';


test('Launching the Amazon url', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  
});