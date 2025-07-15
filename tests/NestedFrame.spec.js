const{test,expect} = require('@playwright/test');

test('Nested Frame', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const totalFrames = page.frames();
    console.log("Number of frames:",totalFrames.length);

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.locator("input[name='mytext3']").fill('ETHAN');


    //nested frame
    const totalChildFrames = await frame3.childFrames();
    console.log("Number of child frames:",totalChildFrames.length);

    //await totalChildFrames[0].waitForSelector('//*[@id="i6"]/div[3]/div');
    // i used click instead of check
    await totalChildFrames[0].locator('//*[@id="i6"]/div[3]/div').click();
    
    await page.waitForTimeout(5000);
    await page.close();

})