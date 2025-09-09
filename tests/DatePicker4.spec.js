import { test, expect } from '@playwright/test';
test.skip('DatePicker4', async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/date-picker.php");

    const expectedDate = 4;
    const expectedMonth = "August";
    const expectedYear = 2025;

    await expect(page.locator("#datetimepicker1")).toBeVisible();
    await expect(page.locator("#datetimepicker1")).toBeEnabled();

    const selectDate = await page.locator("#datetimepicker1").click();
    const flatPickerOpen = page.locator("//div[@class='flatpickr-calendar hasTime animate arrowTop arrowLeft open']");

    //year
    const upArrow = page.locator("//div[@class='flatpickr-calendar hasTime animate open arrowTop arrowLeft']//div[@class='flatpickr-months']//span[@class='arrowUp']");
    const downArrow = page.locator("//div[@class='flatpickr-calendar hasTime animate open arrowTop arrowLeft']//div[@class='flatpickr-months']//span[@class='arrowDown']");

    //div[@class="numInputWrapper"]//input[@class="numInput cur-year"]
    // const currentYear = page.locator("//div[@class='flatpickr-calendar hasTime animate arrowTop arrowLeft open']//input[@class='numInput cur-year']");
    const currentYear = await page.locator("//html/body/div[2]/div[1]/div/div/div/input").inputValue();
    console.log("current year:", currentYear);


    if (Number(currentYear) < expectedYear) {
        await upArrow.click();
    } else {
        await downArrow.click();
    }

    //month 
    const monthDropDown = page.locator('.flatpickr-monthDropdown-months').nth(0);
    await monthDropDown.selectOption(expectedMonth);

    //day

    const day = page.locator('.flatpickr-day').getByText(expectedDate, { exact: true }).nth(0);
    await day.click();

    await page.waitForTimeout(5000);
    await page.close();
})