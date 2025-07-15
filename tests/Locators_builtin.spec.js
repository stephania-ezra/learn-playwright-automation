const{test,expect} = require ('playwright/test');
test('Locators_builtin', async ({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const pageImage =  await page.getByAltText('company-branding');

await expect(pageImage).toBeVisible;

console.log('Logo Image is Visible');

// page.getByPlaceholder() -> to locate an input by placeholder
await page.getByPlaceholder('Username').fill('Admin');

await page.getByPlaceholder('Password').fill('admin123');

//submit button
await page.getByRole('button',{type:'submit'}).click();

//Inner Text

//const pageText = await page.getByText('Test User');
//await expect(pageText).toBeVisible();

//await page.waitForSelector('//p[@class="oxd-userdropdown-name"]');

const name = page.locator('//p[@class="oxd-userdropdown-name"]').textContent();
console.log('logged in user is:',name);

await expect( await page.getByText(name)).toBeVisible();




})