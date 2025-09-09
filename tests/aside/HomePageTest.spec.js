
import { test, expect } from '@playwright/test';
test('Home Page', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    // await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'Home Page Screenshot.png' });

    const pageTitle = page.title;

    //print the title
    console.log('Page Title:', pageTitle);

    await expect(page).toHaveTitle('Selenium Grid Online | Run Selenium Test On Cloud');

    const pageURL = page.url;
    //print the URL
    console.log('Page URL:', pageURL);

    await expect(page).toHaveURL('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    await page.waitForTimeout(3000);
    await page.close();

})