import { test, expect } from '@playwright/test';

test('AssertionTest', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //URL
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

    //title
    await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');

    //text box 
    const searchStoreBox = page.locator('//input[@id="small-searchterms"]');
    await expect.soft(searchStoreBox).toBeEnabled();
    await expect.soft(searchStoreBox).toBeVisible();
    await expect.soft(searchStoreBox).toBeEditable();

    //radio button 
    await page.waitForSelector('//input[@id="gender-male"]');

    //await page.waitForTimeout(5000);

    await page.locator("//input[@id='gender-male']").check(); //for id use #in CSS locator

    expect(page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();

    //checkbox
    //await page.waitForSelector('(//input[@id="Newsletter"])[1]');
    await page.locator('#Newsletter').check();
    expect.soft(page.locator('#Newsletter').isChecked()).toBeTruthy();

    //to Have Attribute
    await page.locator('//button[@id="register-button"]').click();
    expect.soft(page.locator('//button[@id="register-button"]')).toHaveAttribute('name', 'register-button');

    await page.waitForTimeout(5000);
    await page.close()

})

