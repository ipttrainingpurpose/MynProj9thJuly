import { test, expect } from '@playwright/test';

 test('File upload', async ({ page }) => {
// //   await page.goto('https://practice.expandtesting.com/upload');
// //   await page.waitFor.timeout(10000);
// //   await page.locator('input[type="file"]').setInputFiles('./screenshot.png');
// //   await page.waitFor.timeout(10000);

// await page.goto('https://practice.expandtesting.com/upload');
// await page.waitForSelector('input[type="file"]');
// await page.waitForTimeout(10000);
// await page.locator('input[id="fileInput"]').setInputFiles('D:\\Testing\\PlayWright\\screenshot.png');
// await page.waitForTimeout(10000);
// await page.click('#fileSubmit');
let str = "Reverse Example";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse); 
});



