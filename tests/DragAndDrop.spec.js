import { test, expect } from '@playwright/test';

test.skip('DragAndDrop', async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    //await page.waitForSelector('//*[@id="gallery"]/li[4]/img');

    const sourceBoxTatras = page.locator('//*[@id="gallery"]/li[4]/img');
    const targetBox = page.locator('//*[@id="trash"]');

    /*
        await sourceBoxTatras.hover();
        await page.mouse.down();
    
        await targetBox.hover();
        await page.mouse.up();
        */
    await page.waitForTimeout(5000);

    await sourceBoxTatras.dragTo(targetBox);

    await page.waitForTimeout(5000);
    await page.close();
})

test('DragAndDropNew', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.waitForSelector('//*[@id="gallery"]/li[4]/img');

    const sourceBox = page.locator('#draggable');
    const targetBox = page.locator('#droppable');

    /*
        await sourceBoxTatras.hover();
        await page.mouse.down();
    
        await targetBox.hover();
        await page.mouse.up();
        */

    await sourceBox.dragTo(targetBox);

    await page.waitForTimeout(5000);
    await page.close();
})