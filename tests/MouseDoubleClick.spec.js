import { test, expect } from '@playwright/test';

test('MouseDoubleClick', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");


    const button = page.locator("//button[normalize-space()='Copy Text']");
    await button.dblclick();

    const field2 = page.locator("#field2");
    await expect(field2).toHaveValue("Hello World!");

    await page.waitForTimeout(5000);
    await page.close();


})