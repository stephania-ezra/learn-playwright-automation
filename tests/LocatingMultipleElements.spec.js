const { test, expect } = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html')

    //await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    //click LogIn button

    await page.click("//a[@id='login2']")

    //input Username

    await page.fill("//input[@id='loginusername']", 'pavanol')

    //input Password

    await page.fill("//input[@id='loginpassword']", 'test@123')

    //click Login Button
    await page.click("//button[normalize-space()='Log in']")

    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    const productLength = products.length;
    console.log(productLength);

    //expect(productLength).toBe(9);
    expect(products).toHaveLength(9);

    for (const product of products) {
        const productText = await product.textContent();
        console.log(productText);
    }

    await page.waitForTimeout(5000);
    await page.close();
})