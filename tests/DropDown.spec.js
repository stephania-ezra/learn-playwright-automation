import { test, expect } from '@playwright/test';
test.skip('DropDownTest', async ({ page }) => {

   //scrolldown added 
   await page.goto('https://testautomationpractice.blogspot.com/');

   let countryDropDown = page.locator("//select[@id='country']");
   await countryDropDown.scrollIntoView();
   await countryDropDown.selectOption('France');

   expect(await page.locator("//select[@id='country']").textContent()).toContain('France');

   await page.waitForTimeout(5000);

   /*
   //selecting china
   
      const countryDropDown = page.locator('#country');
      await countryDropDown.selectOption('China');
      await page.waitForTimeout(5000);
      
   //await countryDropDown.selectOption({label:'France'});

   //await countryDropDown.selectOption({index:4});

   //await countryDropDown.selectOption({value:'france'});
*/

   //1. asserting the number of options 
   const options = page.locator('#country option');
   await expect(options).toHaveCount(10);



   //2.Getting all the dropdowns 
   const allOptions = await page.$$("//select[@id='country']/option");
   await allOptions.scrollIntoView();
   console.log("Number of options:", allOptions.length);
   expect(allOptions.length).toBe(10);

   let countryStatus = false;
   for (const option of allOptions) {
      //console.log(optionText);
      let optionText = await option.textContent();
      if (optionText.includes('Canada')) {
         countryStatus = true;
         break;
      }
   }

   expect(countryStatus).toBeTruthy();

   //3.getting all the dropdowns from Colors field and checking a particular color

   const colorsAllOptions = await page.$$("//select[@id='colors']/option");
   await colorsAllOptions.scrollIntoViewIfNeeded();
   console.log("number of options:", colorsAllOptions.length);
   expect(colorsAllOptions.length).toBe(7);

   let status = false;
   for (const option of colorsAllOptions) {
      //console.log(colorsText);

      let colorsText = await option.textContent();

      await page.waitForTimeout(5000);

      if (colorsText.includes('White')) {
         status = true;
         break;
      }

   }
   expect(status).toBeTruthy();

   //4. checking simply the presence of a particular color

   const colorsContent = await page.locator('//select[@id="colors"]').textContent();
   await colorsContent.scrollIntoViewIfNeeded();
   console.log(colorsContent);
   expect(colorsContent.includes('Green')).toBeTruthy();
   expect(colorsContent.includes('Black')).toBeFalsy();

   await page.waitForTimeout(5000);

   await page.close();
})