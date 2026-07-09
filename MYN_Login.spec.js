import { test, expect } from '@playwright/test';

test.describe('Myntra Boys T-Shirts', () => {

  // Test 1: Count total products
  test('to find the maximum products', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');
    const products = await page.locator('//li[@class="product-base"]');
    let total = await products.count();
    console.log("Total products:", total);
  });

  // Test 2: Find least price product
  test('find least price product', async ({ page }) => {
    await page.goto("https://www.myntra.com/boy-tshirts");
    const products = await page.$$eval(".product-base", (cards) =>
      cards.map((card) => {
        const brand = card.querySelector(".product-brand")?.innerText || "";
        const name = card.querySelector(".product-product")?.innerText || "";
        const priceText = card.querySelector(".product-discountedPrice")?.innerText || "";
        const price = parseInt(priceText.replace(/[^0-9]/g, ""), 10);
        return { brand, name, price };
      })
    );

    products.sort((a, b) => a.price - b.price);
    console.log("Least Price Product:", products[0]);
  });

});