 import { test, expect } from '@playwright/test';

test('to find the maximum products', async ({ page }) => {
  
await page.goto('https://www.myntra.com/boy-tshirts');
const products=await page.locator('//li[@class="product-base"]');
//console.log("Total products:", products.count());
  let total = await products.count();
  console.log("Total products:", total);
  

}

);
