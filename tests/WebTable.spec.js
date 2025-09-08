const { test, expect } = require('@playwright/test');

test('WebTable', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('//*[@id="productTable"]');

    //Step 1 :number of rows and number of columns

    const columns = table.locator('thead tr th');
    const totalColumns = await columns.count();
    console.log("number of columns", totalColumns);

    expect(totalColumns).toBe(4);

    const rows = table.locator('tbody tr');
    const totalRows = await rows.count();
    console.log("number of rows", totalRows);
    expect(totalRows).toBe(5);


    //step 2 : select checkbox for Smartwatch

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })

    await matchedRow.locator('//input[@type="checkbox"]').check();

    //step 3: select multiple products by a reusable function

    await selectProducts(rows, page, 'Laptop');
    await selectProducts(rows, page, 'Tablet');
    await selectProducts(rows, page, 'Wireless Earbuds');

    //step 4: print all the product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td');
        console.log("tds are:", await tds.count());

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent());
        }
    }

    //step 5 : pagination 

    const pages = page.locator("//ul[@id='pagination']/li");
    const totalPages = await pages.count();
    console.log("Total number of pages:", totalPages);

    for (let p = 0; p < await pages.count(); p++) {

        if (p > 0) {
            await pages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            console.log("tds are:", await tds.count());

            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
    await page.waitForTimeout(5000);
    await page.close();
})


async function selectProducts(rows, page, product) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: product
    })

    await matchedRow.locator('//input[@type="checkbox"]').check();
}
