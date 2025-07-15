const{test,expect} = require('@playwright/test');
test('Hamdling Frames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //Total number of frames
   const totalFrames= page.frames();
   console.log("Number of Frames is:",totalFrames.length);

   const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
   await frame1.locator("input[name='mytext1']").fill('COLLIN'); // get the css selector from selectors hub

await page.waitForTimeout(5000);
})