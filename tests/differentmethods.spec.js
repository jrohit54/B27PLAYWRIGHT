// @ts-check
import { test, expect } from '@playwright/test';

test('to check the checkboc', async ({ page }) => {
  await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

  await page.setViewportSize({width: 1100, height: 500})

  await page.waitForTimeout(2000);

  await page.locator("input[name^='chk_altemai']").click()
  await page.waitForTimeout(2000);


  const value= await page.locator("input[name^='chk_altemai']").isChecked()
  console.log(process.env.ENV)
  console.log(process.env.WEB_URL)
  console.log(process.env.ORG_USERNAME)
  console.log(process.env.ORG_PASSWORD)

  console.log("vlue of checkbox is "+value)

  // Assert the checked state
  await expect(page.locator("input[name^='chk_altemai']")).toBeChecked();





});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

//   await page.locator("").pressSequentially("hello");
// });
