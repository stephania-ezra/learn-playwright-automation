const{test,expect} = require('@playwright/test');
test('InputBoxTest', async ({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php');

    
    await expect(fullNameTextBox).toBeVisible();
    await expect(fullNameTextBox).toBeEmpty();
    await expect(fullNameTextBox).toBeEnabled();
    await expect(fullNameTextBox).toBeEditable();
    const fullNameTextBox = await page.locator('#fullname').fill('john');

    const emailTextBox = await page.locator('#email').fill('john@123');

    const currentAddressTextBox = await page.locator('#address').fill('new street,chennai');

    const passwordTextBox = await page.locator('#password').fill('john*!#%');

   await page.waitForTimeout(5000);
    //submit button
//await page.getByRole('button',{type:'submit'}).click();

await page.locator('//*[@id="TextForm"]/div[5]/input').click();
console.log('Submitted successfuly');

await page.close();    

})