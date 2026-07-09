const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,
    trace: 'on-first-retry',
  },
  reporter: 'html',
});
