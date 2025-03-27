const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.irctc.co.in/nget/train-search');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();
