const{test,expect} =require('@playwright/test') ;
test('SoftAssertion',async ({page})=>{

await page.goto('https://demo.nopcommerce.com/');

await expect.soft(page).toHaveTitle('nopCommerce demo store. Home page title');

await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/');

const pageLogo = await page.locator('//img[@alt="nopCommerce demo store"]');
await expect.soft(pageLogo).toBeVisible();

await page.close();

})