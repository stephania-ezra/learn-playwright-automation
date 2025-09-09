import { test, expect } from '@playwright/test';

test('WebTable Testing', async ({ page }) => {

    await page.goto('https://letcode.in/table');

    await page.waitForSelector('#shopping');
    const table = page.locator('#shopping');

    //step 1 : get number of rows and columns
    const columns = table.locator('thead tr th');
    const totalColumns = await columns.count();
    console.log("Number of headers is:", totalColumns);


    const rows = table.locator('tbody tr');
    const totalRows = await rows.count();
    console.log("Number of rows are:", totalRows);

    //step 2 : print all the details of the table

    for (let i = 0; i < totalRows; i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');
        //console.log("number of row data:",await tds.count());

        for (let j = 0; j < await tds.count(); j++) {
            console.log(await tds.nth(j).textContent());
        }
    }


    await page.waitForTimeout(5000);
    await page.close();

})