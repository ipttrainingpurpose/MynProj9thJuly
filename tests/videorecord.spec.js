import { test, expect } from '@playwright/test';

test('Google search video demo', async ({ page }) => {
 // recordVideo: { dir: 'D:/PlaywrightVideos/' }   
    await page.goto('https://www.google.com');
  //await page.fill('input[name="q"]', 'Playwright video recording');
  await page.fill('//textarea[@name="q"]', 'Playwright video recording', { timeout: 60000 });
  await page.press('//textarea[@name="q"]', 'Enter');
  //await expect(page).toHaveTitle(/Playwright/);
});


// test('Google search video demo', async ({ browser }) => {
//   const context = await browser.newContext({
//     recordVideo: { dir: 'D:/PlaywrightVideos/' }
 // });