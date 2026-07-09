import { test, expect } from '@playwright/test';

test('CSK points count', async ({ page }) => {
  await page.goto('https://www.iplt20.com/matches/points-table');

  });