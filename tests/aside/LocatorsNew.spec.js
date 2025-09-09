import { test, expect } from '@playwright/test';

test.skip('Locators Test', async ({ page }) => {

    await page.goto('https://www.automationexercise.com/login');

    const emailAddress = await page.locator('//input[@data-qa="login-email"]').fill('thilo@gmail.com');

    const password = await page.locator("//input[@placeholder='Password']").fill("testing123");

    //const loginButton = await page.locator('//button[normalize-space()="Login"]').click();
    const loginButton = page.getByRole('button', { type: 'submit' }).nth(0).click();

    await page.waitForTimeout(5000);

    //logged in as 
    const name = await page.locator("//b[normalize-space()='thilothima']").textContent();
    console.log("logged In User is", name);
    await expect(page.getByText(name)).toBeVisible();

    const logoutLink = page.locator("//a[normalize-space()='Logout']").click();
    //const logoutLink = await page.getByRole('link', { href: '/logout' }).click();
    //expect(logoutLink).toBeVisible();
    console.log("Logout link is Visible");

})