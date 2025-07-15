const{test,expect} = require('@playwright/test');

test('AssertionTest',async ({page})=>{

await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

//URL
await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

//title
//await expect.soft(page).toHaveTitle('nopCommerce demo store. Home page title');

//text box 
//const searchStoreBox = await page.locator('//input[@id="small-searchterms"]');
//await expect.soft(searchStoreBox).toBeEnabled();

//radio button 
//await page.waitForSelector('//input[@id="gender-male"]');

await page.waitForTimeout(5000);
const maleRadioButton = await page.locator('//input[@id="gender-male"]'); //for id use #in CSS locator

await expect.soft(maleRadioButton).isChecked().toBeFalsy();

//checkbox
//await page.waitForSelector('(//input[@id="Newsletter"])[1]');
const newsLetterCheckBox = await page.locator('#Newsletter')
await expect.soft(newsLetterCheckBox).isChecked().toBeTruthy();

//to Have Attribute
const regsiterButton = await page.locator('//button[@id="register-button"]').click();
//await expect.soft(regsiterButton).toHaveAttribute('name','register-button');


await page.close()

})

