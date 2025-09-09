import { test, expect } from '@playwright/test';
import moment from "moment";

test.skip('DatePicker3 using fill function', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.waitForSelector('//*[@id="birthday"]');

    await page.locator('//*[@id="birthday"]').fill("2025-09-09");

    await page.waitForTimeout(5000);

})

test.skip('DatePicker3 using moment', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.locator("//input[@placeholder='Start date']").click();


    const expectedDate = "20";
    const expectedMonth = 'May';
    const expectedYear = "2024";


    //getting locators for MonthYear and previous button and next button
    const month = await page.locator("//table[@class='table-condensed']//th[@class='datepicker-switch']").nth(0).textContent();
    const year = await page.locator("//table[@class='table-condensed']//th[@class='datepicker-switch']").nth(1).textContent();

    console.log("Month is:", month);
    console.log("Year is:", year);

    const prev = page.locator("//table[@class='table-condensed']//th[@class='prev']").nth(0);
    const next = page.locator("//table[@class='table-condensed']//th[@class='next']").nth(0);
    // const parent = page.getByRole("table").filter({ has: next });

    await prev.click();

    // await next.click(); 

    //click 20 from startDate
    await page.locator("//input[@placeholder='Start date']").click();
    const startDate = page.locator("//table[@class='table-condensed']/tbody/tr/td[@class='day']").getByText('20', { exact: true });
    await startDate.click();


    //click 30 from endDate
    await page.locator("//input[@placeholder='End date']").click();
    const endDate = page.locator("//table[@class='table-condensed']/tbody/tr/td[@class='day']").getByText('30', { exact: true });
    await endDate.click();

    await page.waitForTimeout(5000);
    //await page.close();
})


test.skip('DatePicker3 comparing with Current date', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    //Start Date
    await page.locator("//input[@placeholder='Start date']").click();

    await page.waitForTimeout(5000);

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    console.log("Current month and year", await mmYY.textContent());
    //await page.waitForTimeout(5000);

    const prev = page.locator("//table[@class='table-condensed']//th[@class='prev']").nth(0);
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    let dateToSelect = "May 2019";
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log("this month?", thisMonth);

    while (await mmYY.textContent() != dateToSelect) {
        if (thisMonth) {
            await prev.click();
        } else {
            await next.click();
        }
    }
    await page.click("//td[@class='day'][text()='13']");

    await page.waitForTimeout(7000);


    //End Date
    //const endDate = await page.locator("//input[@placeholder='End date']").textContent();
    const endDate = await page.locator("//input[@placeholder='End date']").textContent().fill(await mmYY.textContent());

    //expect(endDate).toContain(dateToSelect);
    // expect(endDate.defaultValue()).toContain(dateToSelect);
    // await endDate.fill(await mmYY.textContent());

    console.log("End date is:", endDate);
    //expect(endDate).toBeNull();

    //await expect(endDate).toBeEmpty();

    const mmYYEndDate = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    console.log("Current month and year", await mmYYEndDate.textContent());

    await mmYYEndDate.fill()
    await page.waitForTimeout(3000);


    //const prevEndDate = page.locator("//table[@class='table-condensed']//th[@class='prev']").nth(0);

    const prevEndDate = page.locator("//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']");
    await page.waitForTimeout(5000);

    //const nextEndDate = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
    const nextEndDate = page.locator("//div[@class='datepicker-days']//th[@class='next'][normalize-space()='»']");


    let dateToSelectEndDate = "May 2020";
    const thisMonthEndDate = moment(dateToSelectEndDate, "MMMM YYYY").isBefore();
    console.log("this month?", thisMonthEndDate);

    while (await mmYYEndDate.textContent() != dateToSelectEndDate) {
        if (thisMonthEndDate) {
            await prevEndDate.click();
        } else {
            await nextEndDate.click();
        }
    }
    await page.click("//td[@class='day'][text()='13']");

    await page.waitForTimeout(5000);

    await page.close();
})