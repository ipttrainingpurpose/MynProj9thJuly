import { test } from '@playwright/test';

test('find least priced product', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  const products = await page.$$('.product-base');

  let leastPrice = null;
  let leastProductName = '';

  for (let product of products) {
    const brand = await product.$("//h3[@class='product-brand']");
    const name = await product.$("//h4[@class='product-product']");
    const priceEl = await product.$('//span[@class="product-discountedPrice"]') || await product.$("//div[@class='product-price']");

    if (brand && name && priceEl) {
      const brandText = await brand.textContent();
      const nameText = await name.textContent();
      const priceText = await priceEl.textContent();
      const price = parseInt(priceText.replace(/\D/g, ''), 10);

      if (leastPrice === null || price < leastPrice) {
        leastPrice = price;
        leastProductName = `${brandText} - ${nameText}`;
      }
    }
  }

  console.log("Least product:", leastProductName, "₹" + leastPrice);
});