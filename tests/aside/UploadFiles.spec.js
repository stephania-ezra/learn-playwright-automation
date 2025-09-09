import { test, expect } from '@playwright/test';

test.skip('UploadFiles', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/upload-download.php/');

    await page.waitForSelector('#uploadFile');

    // const uploadButton = await page.locator('#uploadFile').click();

    await page.locator('#uploadFile').setInputFiles('tests/uploadFiles/Gratitude-Journal.pdf');

    await page.waitForTimeout(3000);

})


test.skip('UploadMultipleFiles', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('#filesToUpload');

    // const uploadButton = await page.locator('#filesToUpload').click();

    await page.locator("#filesToUpload").setInputFiles(['tests/uploadFiles/Gratitude-Journal.pdf',
        'tests/uploadFiles/TestData.xlsx']);

    await page.waitForTimeout(3000);


})

test('UploadSingleFileNew', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForSelector('#singleFileInput');

    await page.locator("#singleFileInput").setInputFiles('tests/uploadFiles/Gratitude-Journal.pdf');

    const uploadButton = await page.locator("//button[normalize-space()='Upload Single File']").click();

    await expect(page.locator("//p[@id='singleFileStatus']")).toHaveText("Single file selected: Gratitude-Journal.pdf, Size: 4989828 bytes, Type: application/pdf");
    await page.waitForTimeout(7000);

})

