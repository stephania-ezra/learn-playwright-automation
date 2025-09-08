
import { test, expect } from '@playwright/test';

test('RecordVideo', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');

    await page.locator('#loginpassword').fill('test@123');

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#logout2')).isVisible();

    await page.waitForTimeout(2000);
    await page.close();


})
