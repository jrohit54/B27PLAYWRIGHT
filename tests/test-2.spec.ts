import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByText('Configuration').click();
  await page.getByRole('menuitem', { name: 'Termination Reasons' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('Deepak');
  await page.locator('form').getByRole('textbox').press('Tab');
  await page.getByText('* Required Cancel Save').click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').press('ControlOrMeta+a');
  await page.locator('form').getByRole('textbox').fill('Perormance Issue');
  await page.getByRole('button', { name: 'Save' }).click();
});