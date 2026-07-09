import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');

test('Print all links', async ({ page }) => {

    await page.goto('https://nitheeskumargopi-1774860243567.atlassian.net/jira/software/projects/MAK/boards/67/backlog');

    const links = await page.locator('a').all();

    console.log("Total Links:", links.length);

    for (const link of links) {
        const text = await link.textContent();
        const href = await link.getAttribute('href');

        console.log(`Text: ${text?.trim()} | URL: ${href}`);
    }
});