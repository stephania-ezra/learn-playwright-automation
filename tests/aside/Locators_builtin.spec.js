import { test, expect } from '@playwright/test';

test.skip('Locators_builtin', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const pageImage = page.getByAltText('company-branding');

    expect(pageImage).toBeVisible;

    console.log('Logo Image is Visible');

    // page.getByPlaceholder() -> to locate an input by placeholder
    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    //submit button
    await page.getByRole('button', { type: 'submit' }).click();

    //Inner Text

    //const pageText = await page.getByText('Test User');
    //await expect(pageText).toBeVisible();

    //await page.waitForSelector('//p[@class="oxd-userdropdown-name"]');

    await page.waitForTimeout(5000);
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
    console.log('logged in user is:', name);

    await expect(page.getByText(name)).toBeVisible();

})

test.skip('LocatorsNew1', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');

    const logo = page.getByAltText('nopCommerce demo store');
    expect(logo).toBeVisible();
    console.log("Logo is Visible");

    const searchBox = page.getByPlaceholder('Search store');

    expect(searchBox).toBeVisible();
    expect(searchBox).toBeEditable();
    expect(searchBox).toBeEnabled();

    await searchBox.fill("Apple MacBook Pro");
    console.log("Apple MacBook Pro is searched");
})