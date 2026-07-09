import {test,expect} from '@playwright/test';
test('Launching the url', async ({page,context,browser})=>{
    await page.goto('https://www.amazon.com');
    console.log(await context.cookies());
    console.log(await browser.version());
    await page.goto('https://playwright.dev/');
    //await page.goBack();
    //await page.goForward();
    //await page.reload();
    await page .screenshot({path:'screenshot.png'});
    //await expect(page).toHaveTitle(/Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!/);
    await expect(page).toHaveTitle(/Playwright/);
    console.log(await page.title());
    
}  
);  
test('Launching the url11', async ({page,context,browser})=>{
    await page.goto('https://www.amazon.com');
    console.log(await context.cookies());
    console.log(await browser.version());
    await page.goto('https://www.amazon.com');
    //await page.goBack();
    //await page.goForward();
    //await page.reload();
    await page .screenshot({path:'screenshot1.png'});
    //await expect(page).toHaveTitle(/Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!/);
    await expect(page).toHaveTitle(/Amazon.com. Spend less. Smile more./);
    console.log(await page.title());
}  
);  
