//const { test, expect } = require('@playwright/test');
/* import {test,expect} from '@playwright/test';
test('Amazon search using locators', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com');
//const searchBox = page.locator("//input[@id='twotabsearchtextbox']");
//const searchBox =page.getByPlaceholder('Search Amazon.in');
//const searchBox =page.getByPlaceholder('Search Amazon.in');
await page.waitForTimeout(5000);
await searchBox.fill('Playwright book');
const searchButton = page.locator('.nav-search-submit');
await searchButton.click();

}); */

import { test, expect } from '@playwright/test';

test('Practice multiple locators for search box', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(10000);
  await page.locator("//div[@id='nav-xshop']/ul/li[27]").click();

  // Locator by ID
  //const byId = page.locator('#twotabsearchtextbox');
  //await byId.fill('Playwright book');

  // Locator by XPath
  //const byXPath = page.locator("//input[@id='twotabsearchtextbox']");
  //await byXPath.fill('Playwright testing');
  //await page.waitForTimeout(5000);

  // Locator by Role
  //const byRole = page.getByRole('textbox', { name: 'Search' });
   //const searchBox = page.getByRole('textbox', { name: 'Search' });
  //await searchBox.fill('Automation QA');
//await page.waitForTimeout(5000);
  // Locator by Placeholder (if available)
  //const byPlaceholder = page.getByPlaceholder('Search Amazo');
  //await byPlaceholder.fill('TypeScript Playwrightttttt');

  //  const byClass = page.locator('.nav-input nav-progressive-attribute');
  // await byClass.fill('Playwright by Class');
  // await page.waitForTimeout(5000);
});