const {test, expect} = require('@playwright/test');


test('Home Page',async ({page})=>{

await page.goto('https://www.demoblaze.com/');

const pageTitle= page.title;

//print the title
console.log('Page Title:',pageTitle);

await expect(page).toHaveTitle('STORE');

const pageURL = page.url;
//print the URL
console.log('Page URL:',pageURL);

await expect(page).toHaveURL('https://www.demoblaze.com/');

page.close;

})