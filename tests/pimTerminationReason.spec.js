import { test, expect } from '@playwright/test';

import loginData from "../testData/login.json";

import {LoginPage} from "../pages/loginPage";



//const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const PimPage = require('../pages/pimPage');
const TerminationReasonsPage = require('../pages/terminationReasonsPage');


test('Verify Add Termination Reason in PIM module', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const pimPage = new PimPage(page);
  const terminationReasonsPage = new TerminationReasonsPage(page);

  // Login
  await loginPage.login(loginData.userName, loginData.password);

  // Navigate to Termination Reasons
  await dashboardPage.navigateToPIM();
  await pimPage.navigateToTerminationReasons();

  // Generate a random termination reason
  const randomString = Array.from({ length: 5 }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join('');
  const terminatedReason = `Performance Issue ${randomString}`;

  // Add Termination Reason
  await terminationReasonsPage.addTerminationReason(terminatedReason);

  // Verify if the reason exists in the list
  const isReasonPresent = await terminationReasonsPage.verifyTerminationReasonExists(terminatedReason);
  expect(isReasonPresent).toBeTruthy();
});
