
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')

    //click LogIn button

    await page.click("//a[@id='login2']")

    //input Username

    await page.fill("//input[@id='loginusername']", 'pavanol')

    //input Password

    await page.fill("//input[@id='loginpassword']", 'test@123')

    //click Login Button
    await page.click("//button[normalize-space()='Log in']")

    //check whether Logout link is visible

    const logoutLink = page.locator("//a[@id='logout2']")

    await expect(logoutLink).toBeVisible();

    console.log(logoutLink, 'Logout is visible');

    // await page.close();


})