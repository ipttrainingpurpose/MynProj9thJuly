# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MYN_PROJ\MYN_Login.spec.js >> Myntra Boys T-Shirts >> find least price product
- Location: tests\MYN_PROJ\MYN_Login.spec.js:14:7

# Error details

```
Error: page.goto: SSL peer certificate or SSH remote key was not OK
Call log:
  - navigating to "https://www.myntra.com/boy-tshirts", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Myntra Boys T-Shirts', () => {
  4  | 
  5  |   // Test 1: Count total products
  6  |   test('to find the maximum products', async ({ page }) => {
  7  |     await page.goto('https://www.myntra.com/boy-tshirts');
  8  |     const products = await page.locator('//li[@class="product-base"]');
  9  |     let total = await products.count();
  10 |     console.log("Total products:", total);
  11 |   });
  12 | 
  13 |   // Test 2: Find least price product
  14 |   test('find least price product', async ({ page }) => {
> 15 |     await page.goto("https://www.myntra.com/boy-tshirts");
     |                ^ Error: page.goto: SSL peer certificate or SSH remote key was not OK
  16 |     const products = await page.$$eval(".product-base", (cards) =>
  17 |       cards.map((card) => {
  18 |         const brand = card.querySelector(".product-brand")?.innerText || "";
  19 |         const name = card.querySelector(".product-product")?.innerText || "";
  20 |         const priceText = card.querySelector(".product-discountedPrice")?.innerText || "";
  21 |         const price = parseInt(priceText.replace(/[^0-9]/g, ""), 10);
  22 |         return { brand, name, price };
  23 |       })
  24 |     );
  25 | 
  26 |     products.sort((a, b) => a.price - b.price);
  27 |     console.log("Least Price Product:", products[0]);
  28 |   });
  29 | 
  30 | });
```