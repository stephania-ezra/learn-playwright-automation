import { test, expect } from '@playwright/test';

test('MouseHoover Test', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/');

    const computers = page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']");

    const noteBooks = page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Notebooks']");

    await computers.hover();
    await noteBooks.hover();

    await page.waitForTimeout(5000);
    await page.close();
})