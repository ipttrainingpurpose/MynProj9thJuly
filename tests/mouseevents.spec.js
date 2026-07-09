import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.example.com/');
  await page.mouse.move(100,200);
  await page.mouse.down();;
  await page.mouse.up();

  await page.mouse.move(50,50);
  await page.mouse.down();
  await page.mouse.move(300,300);
  await page.mouse.up();
  await page.mouse.wheel(0,500);
  await page.mouse.move(150,150);
  await page.mouse.down({button: 'right'});
  await page.mouse.up({button: 'right'});
  //await page.browser.close;
  await page.close();
  
});
