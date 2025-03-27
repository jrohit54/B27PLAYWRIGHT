const { test, expect, chromium } = require('@playwright/test');

test('Google Search in Chrome', async ({ page }) => {
    // Launch browser with Google Chrome
   // const browser = await chromium.launch({ headless: false, channel: 'chrome' });
   // const context = await browser.newContext();
   //const page = await context.newPage();

    // Open Google
    await page.goto('https://www.google.com/');

    // Accept Cookies if prompt appears (Uncomment if needed)
    // await page.click('text=Accept');

    // Type search query
    await page.fill('textarea[name="q"]', 'Playwright Testing');

    // Press Enter to search
    await page.press('textarea[name="q"]', 'Enter');

    // Wait for search results to load
    await page.waitForSelector('#search');

    // Click on the first search result
    await page.click('h3');

    // Close the browser
    await browser.close();
});
