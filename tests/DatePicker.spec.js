import { test, expect } from '@playwright/test';
test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //method 1
    //directly sending values for the input box 
    //await page.locator('#datepicker').fill("07/23/2025");


    //method 2
    const expectedMonth = 'August';
    const expectedDate = 4;
    const expectedYear = 2016;

    await page.locator('#datepicker').click();

    while (true) {
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();

        console.log("currentMonth:", currentMonth)
        console.log("currentYear:", currentYear)

        if (expectedMonth == currentMonth && expectedYear == currentYear) {
            break;
        } else {
            await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();

        }
    }

    //locating day

    const days = await page.$$("//table[@class='ui-datepicker-calendar']/tbody/tr/td");
    console.log("Total number of days:", days.length);

    for (const day of days) {
        const currentDay = await day.textContent();
        if (currentDay == expectedDate) {
            day.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})