import { test, expect } from '@playwright/test';

test.skip('Annotations Test', async ({ page }) => {

    console.log("this is my first test");
})

test.skip('Annotation Test', async ({ page }) => {
    test.fail(); //expected
    console.log("this is my second test");
    expect(1).toBe(2); //actual 

    //both expected and actual is failed, then test is pass
})

/*
test('Annotation Testing', async ({ page }) => {
    test.fixme();
    console.log("this is my third test");
})

test('Annotation TestingNew', async ({ page, browserName }) => {

    console.log("this is my fourth test");
    if (browserName == 'firefox') {
        test.skip();
    }
});
*/

test.skip('Annotation TestingNew', async ({ page, browserName }) => {
    console.log("this is my fifth test");
    if (browserName == 'firefox') {
        test.fail();
    }
});

//checking slow annotation 
test.skip('test7', async ({ page, browserName }) => {
    //test.slow(); //triple the timeout 1000*3 = 3000ms
    test.setTimeout(5000);
    console.log("this is my sixth test");
    await page.goto("https://www.tutorialspoint.com/selenium/practice/select-menu.php");
});

