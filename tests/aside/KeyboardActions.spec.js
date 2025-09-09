import { test, expect } from '@playwright/test';

test('KeyBoardActions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("NA ORU THADAVA SONA NOORU THADAVA SONA MADRI");

    // await page.type('name="text1"', "NA ORU THADAVA SONA NOORU THADAVA SONA MADRI");
    //CTRL + A

    //await page.keyboard.press('Meta+A');

    //CTRL + C

    await page.keyboard.press('Meta+C');

    //TAB

    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //CTRL+V

    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);
    await page.close();

})