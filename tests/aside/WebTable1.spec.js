import { test, expect } from '@playwright/test';
test('WebTable', async ({ page }) => {

    await page.goto('https://letcode.in/table');

    await page.waitForSelector("#simpletable");
    const table = page.locator('#simpletable');
    expect(table).not.toBeEmpty();

    //Step 1 : get number of rows and columns

    const columns = table.locator('thead tr th');
    const totalColumns = await columns.count();
    console.log("Total Columns are :", totalColumns);

    const rows = table.locator('tbody tr');
    const totalRows = await rows.count();
    console.log("Total Rows are :", totalRows);

    //step 2 : select checkbox for Raj
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Raj'
    })

    await matchedRow.locator('//input[@type="checkbox"]').check();

    //step 3: select multiple name by a reusable function

    await selectByName(rows, page, 'Man');
    await selectByName(rows, page, 'Chatterjee');

    await page.waitForTimeout(5000);
    await page.close();
})

async function selectByName(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('//input[@type="checkbox"]').check();
}