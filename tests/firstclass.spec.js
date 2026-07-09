import { test } from '@playwright/test';

//{}=blocks
// () parameter
//[] array

// async = function that handles asynchronous operations
// await = keyword that waits for a promise to resolve

test('Launching the url', async ({ page }) => {
  await page.goto('https://www.google.com');
});

// function n() {
//   let a = 12;
//   console.log(a);
// }

// function m(a) {
//   console.log(a);
// }