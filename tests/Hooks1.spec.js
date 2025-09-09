import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://www.automationexercise.com/login");

    //login

    const emailAddress = await page.locator("//input[@data-qa='login-email']").fill("collins.einstein@gmail.com");

    const password = await page.locator("//input[@placeholder='Password']").fill("testing123");

    const loginButton = await page.locator("//button[normalize-space()='Login']").click();

    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.automationexercise.com/');

}
);

test.afterAll(async () => {

    //Logout
    await page.locator("//a[normalize-space()='Logout']").click();
    await page.waitForTimeout(2000);
    await page.close();

}
);

test.skip('AddProductsToCart', async () => {

    await page.waitForTimeout(2000);

    const allProducts = await page.$$("//div[@class='col-sm-4']/div/div/div/p");
    console.log("Count is: ", allProducts.length);
    expect(allProducts.length).toBe(40);

    //displaying all the products
    allProducts.map(async element => {
        console.log("element: " + await element.textContent());
    })

    const addToCart = await page.locator("(//a[contains(text(),'View Product')])[1]").click();

    await expect(page).toHaveURL('https://www.automationexercise.com/product_details/1');

    await page.locator("//button[normalize-space()='Add to cart']").click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Your product has been added to cart');
        await dialog.accept();
    })

});


