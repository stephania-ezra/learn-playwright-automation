//const{test,expect} = require('@playwright/test');

import { test, expect } from '@playwright/test';
import { join } from 'path';

test('Nested Frame', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const totalFrames = page.frames();
    console.log("Number of frames:", totalFrames.length);

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.locator("input[name='mytext3']").fill('ETHAN');


    //nested frame
    const totalChildFrames = frame3.childFrames();
    console.log("Number of child frames:", totalChildFrames.length);

    //await totalChildFrames[0].waitForSelector('//*[@id="i6"]/div[3]/div');
    // i used click instead of check

    //checkboxes
    await totalChildFrames[0].locator('//*[@id="i6"]/div[3]/div').click();

    await totalChildFrames[0].locator('//*[@id="i21"]').click();

    await totalChildFrames[0].locator('//*[@id="i24"]').click();

    await totalChildFrames[0].locator('//*[@id="i27"]').click();

    //dropdown
    /*const loopButtonDropDown = totalChildFrames[0].locator('.vRMGwf oJeWuf');
    await loopButtonDropDown.selectOption('')*/

    await page.waitForTimeout(5000);
    await page.close();

})