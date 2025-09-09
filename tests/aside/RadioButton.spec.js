const { test, expect } = require('@playwright/test');
test('RadioButtonTest', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');

    //yes radio button 

    await page.locator("//input[@value='igottwo']").check();
    await expect(await page.locator("//input[@value='igottwo']")).toBeChecked();
    expect(await page.locator("//input[@value='igottwo']").isChecked()).toBeTruthy();


    //Impressive radio button 

    expect(await page.locator("//input[@value='igotthree']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
    await page.close();
})