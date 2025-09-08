//const{test,expect} = require('@playwright/test');

import { test, expect } from '@playwright/test';
test('Alert with OK', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Alert Dialog Handler

    page.on('Alert Dialog', async dialog => {

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(5000);

});



test('Alert Test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Alert Dialog Handler

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        // await dialog.dismiss();
    })

    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);

});


test('Alert Test with Prompt', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Alert Dialog Handler
    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('John'); //passing the new value here
        //await dialog.dismiss();
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    //await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);

});