import { test, expect } from '@playwright/test';

import loginData from "../testData/login.json";

const persons = ["CEO", "CTO", "CFO"];

for (let person of persons) {
    test(`verify test run for role ${person}`, async ({ page }) => {
        console.log(`${person}`);
        console.log(loginData.userName);
    });
}



persons.forEach(element => {
    test(`verify test runsss for role ${element}`, async ({ page }) => {
        console.log(`${element}`);
    });
});