import { test, expect } from '@playwright/test';

test.skip('Tracing Test', async ({ page }) => {

    await page.goto("https://www.automationexercise.com/login");

    const emailAddress = await page.locator("//input[@data-qa='login-email']").fill("collins.einstein@gmail.com");

    const password = await page.locator("//input[@placeholder='Password']").fill("testing123");

    const loginButton = await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//a[normalize-space()='Logout']").click();

    await page.waitForTimeout(2000);
    await page.close();
})