import { test, expect } from '@playwright/test';
test('DatePicker2', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const expectedDate = "20";
    const expectedMonth = 'August';
    const expectedYear = "2026";

    //clicking Date Picker2 

    await page.locator("#txtDate").click();

    //selecting month
    /*
        const monthDropdown = page.locator(".ui-datepicker-month");
        await monthDropdown.selectOption(expectedMonth);
    */

    //Selecting month by using for loop
    const monthDropDown = page.locator(".ui-datepicker-month");
    const monthDropDownOptions = await page.$$(".ui-datepicker-month option");
    console.log("number of months are:", monthDropDownOptions.length);
    expect(monthDropDownOptions.length).toBe(12);

    for (const currentmonth of monthDropDownOptions) {
        const actualMonth = await currentmonth.textContent();
        if (expectedMonth == actualMonth) {
            await monthDropDown.selectOption(currentmonth);
            break;
        }
    }

    //selecting year
    const yearDropDown = page.locator(".ui-datepicker-year");
    const yearDropDownOptions = await page.$$(".ui-datepicker-year option");
    console.log("total number of year:", yearDropDownOptions.length);
    expect(yearDropDownOptions.length).toBe(21);

    for (const currentYear of yearDropDownOptions) {
        const actualYear = await currentYear.textContent();
        if (expectedYear == actualYear) {
            await yearDropDown.selectOption(currentYear);
            break;
        }
    }

    //*********************/
    //const yearDropDown = page.locator(".ui-datepicker-year");
    //await yearDropDown.selectOption(expectedYear);

    //selecting day

    const dates = await page.$$("//table[@class='ui-datepicker-calendar']/tbody/tr/td");
    console.log("Number of days", dates.length);

    for (const day of dates) {
        const dayText = await day.textContent();
        //console.log(dayText);

        if (dayText == expectedDate) {
            await day.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    //await page.close();
})

