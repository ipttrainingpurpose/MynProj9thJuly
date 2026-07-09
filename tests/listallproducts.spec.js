import { test } from '@playwright/test';

test.only('list all product names and prices', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');
   const products1=await page.locator('//li[@class="product-base"]');

  const products = await page.$$eval('li.product-base',
    cards => cards.map(card => {
      const name = card.querySelector('h4.product-product')?.innerText || '';
      const priceText = card.querySelector('span.product-discountedPrice')?.innerText || '0';
      const price = parseInt(priceText.replace(/\D/g, ''), 10);
      return { name, price };
    })
  );

  products.forEach(p => console.log(`${p.name} - ₹${p.price}`));

//console.log("Total products:", products.count());
  let total = await products1.count();
  console.log("Total products:", total);
});