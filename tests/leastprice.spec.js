//import { test, chromium } from '@playwright/test';

// test.only('find least price of products', async ({ page }) => {
//   // Go to Myntra boy-tshirts page
//   await page.goto('https://www.myntra.com/boy-tshirts');
//   const priceElements = await page.$$('span.product-discountedPrice');
//   let prices = [];
//   for (let el of priceElements) {
//     let text = await el.textContent();          
//     let number = parseInt(text.replace(/\D/g, ''), 10); 
//     prices.push(number);
//   }
//   let leastPrice = Math.min(...prices);

//   console.log("Least price:", leastPrice);
// //----------------------------------------
// // const priceTexts = await page.locator('span.product-discountedPrice').allTextContents();

// // const prices = priceTexts.map(price =>
// //   Number(price.replace(/\D/g, ''))
// // );
// // console.log("Least price:", Math.min(...prices));
// //----------------------------------------
// });


//import { test, chromium } from '@playwright/test';

//test.only('find least price of products', async ({ page }) => {
  // await page.goto('https://www.myntra.com/boy-tshirts');

  // const prices = await page.$$eval(
  //   'span.product-discountedPrice',
  //   els => els.map(el => parseInt(el.textContent.replace(/\D/g, ''), 10))
  // );

  // console.log("Least price:", Math.min(...prices));
//});
//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Select IPL points table cell', async ({ page }) => {
  await page.goto('https://www.iplt20.com/matches/points-table');

  const cell = page.locator('//tbody[@id="pointsdata"]/descendant::tr[8]/td[11]');
  const text = await cell.textContent();

  console.log('Cell value:', text);
  expect(text).not.toBeNull();
});
