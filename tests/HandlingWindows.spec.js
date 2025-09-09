import { test, expect, chromium } from '@playwright/test';
test.skip('Handling Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    const allPages = context.pages();
    console.log("Number of Pages:", allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM");

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

    await page3.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php');
    await expect(page3).toHaveTitle("Selenium Practice - Select Menu");


    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
    await page3.waitForTimeout(5000);

    await browser.close();

})

test.skip('Handling Multiple Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle("OrangeHRM");

    const pagePromise = context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

    await page1.waitForTimeout(5000);
    await newPage.waitForTimeout(5000);
    await browser.close();
})

