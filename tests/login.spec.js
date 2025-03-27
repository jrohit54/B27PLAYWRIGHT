// @ts-check
import { test, expect } from '@playwright/test';

import loginData from "../testData/login.json";

//Verify login with valid credetilas
//Launch the url
//enter the user name
// enter the password
//click on the login
//user should be navigated to dash board
//Click on PIM module link
//click on Configuration menu item
//click on Testmination Reason menuitem
//Add the temination reason
//To verify the added reason in the list






test(`to verify Add Termination reason in PIM module`, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill(loginData.userName);
  await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').fill(loginData.password);
  await page.locator("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
  await expect(page).toHaveURL('/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByText('Configuration').click();
  await page.getByRole('menuitem', { name: 'Termination Reasons' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('* Required Cancel Save').click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').press('ControlOrMeta+a');
  const randomString = Array.from({ length: 5 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join('');
  let terminatedReason = `Performance Issue ${randomString}`
  await page.locator('form').getByRole('textbox').fill(terminatedReason);
  await page.getByRole('button', { name: 'Save' }).click();
  //to verify now if record is added or not
  await expect(page).toHaveURL('/web/index.php/pim/viewTerminationReasons');
  await page.locator("//div[@class='oxd-table-row oxd-table-row--with-border']/div[2]/div").first().waitFor({ state: 'visible' });
  // Wait for the elements to appear
  const reasonElements = await page.locator("//div[@class='oxd-table-row oxd-table-row--with-border']/div[2]/div").allTextContents();
  // Check if the terminated reason is in the list
  const isReasonPresent = reasonElements.some(reason => reason.trim() === terminatedReason);
  if (isReasonPresent) {
    console.log(`Success: '${terminatedReason}' is present in the list.`);
  } else {
    console.error(`Error: '${terminatedReason}' is NOT found in the list.`);
  }
});