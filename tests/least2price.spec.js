import { test } from '@playwright/test';

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