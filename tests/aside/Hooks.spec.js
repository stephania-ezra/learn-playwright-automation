import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login

    const userName = await page.locator("//input[@placeholder='Username']").fill("Admin");

    const password = await page.locator("//input[@placeholder='Password']").fill("admin123");

    const loginButton = await page.locator("//button[normalize-space()='Login']").click();
    await page.waitForTimeout(2000);

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

}
);


test.afterEach(async () => {

    //Logout
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
    await page.waitForTimeout(2000);

    const userDropDown = await page.$$("//ul[@class='oxd-dropdown-menu']/li/a");
    console.log("Count:", userDropDown.length);

    expect(userDropDown.length).toBe(4);

    for (const dropDown of userDropDown) {
        const dropDownText = await dropDown.textContent();
        //console.log(dropDownText);

        if (dropDownText.includes('Logout')) {
            await page.locator("//a[normalize-space()='Logout']").click();
        }
    }
}
);


test('HomePageTest', async ({ page }) => {

    //HomePageTest
    const widgets = await page.$$("//div[@class='orangehrm-dashboard-widget-name']//p");
    console.log("Widget Length is: ", widgets.length);

    widgets.map(async element => {
        console.log("element: " + await element.textContent());
    })


    // widgets.forEach(async (value, index) => {
    //     console.log("element: " + index + " " + await value.textContent());
    // })


    await page.waitForTimeout(5000);
    await page.close();
});