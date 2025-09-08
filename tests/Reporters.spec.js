import { test, expect } from '@playwright/test';

test('Reporters Test', async ({ page }) => {

    await page.goto("https://demoqa.com/browser-windows");
    await expect(page).toHaveTitle("DEMOQA");

})

test('Reporters Test1', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page).toHaveTitle("The Internet");

})

test('Reporters Test2', async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");
    await expect(page).toHaveTitle("Frames");

})

test('Reporters Test3', async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
    await expect(page).toHaveTitle("Drag And Drop - GlobalS");

})
