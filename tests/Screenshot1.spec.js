import { test, expect } from '@playwright/test';
test('Screenshot Test', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");

    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Home Page Screenshot.png' });

    await page.waitForTimeout(2000);
    await page.close();

})

test.skip('Screenshot Full Page Test', async ({ page }) => {

    await page.goto("https://www.automationexercise.com/");

    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'fullPage Screenshot.png', fullPage: true });

    await page.waitForTimeout(2000);
    await page.close();

})

test('Element Screenshot Test', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("(//div[@id='HTML14'])[1]").screenshot({ path: 'tests/screenshots/' + Date.now() + 'Element Screenshot.png' });

    await page.waitForTimeout(2000);
    await page.close();
})
