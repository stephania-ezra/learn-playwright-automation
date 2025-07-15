const{test,expect} = require('@playwright/test');

test('HandlingMultipleCheckBoxes',async ({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');

    await page.waitForSelector("//ul[@id='bs_main']/li");

    await page.locator("//input[@id='c_bs_1']").check();

     

    expect( await page.locator("//input[@id='c_bs_1']")).toBeChecked();
    expect( await page.locator("//input[@id='c_bs_1']").isChecked()).toBeTruthy();


    //+ symbol

    await page.locator('//*[@id="bs_1"]/span[1]').click();

    const checkBoxesLocators = [
                        "//input[@id='c_bf_1']",
                        "//input[@id='c_io_1']",
                        "//input[@id='c_io_2']",
                        "//input[@id='c_io_3']",
                        "//input[@id='c_io_4']",
                        "//input[@id='c_bf_2']",
                        "//input[@id='c_io_5']",
                        "//input[@id='c_io_6']",
                        "//input[@id='c_io_7']",
                        "//input[@id='c_io_8']"
    ]

//checking all the boxes
    for(const locator of checkBoxesLocators){
       await page.locator(locator).check();
    }

    await page.waitForTimeout(5000);   
    await page.close();
})