const{test,expect} = require('@playwright/test');

test('DropDownTest',async ({page})=>{

await page.setViewportSize({width:1470,height:833})
await page.goto('https://testautomationpractice.blogspot.com/');

//const countryDropDown = await page.locator("//select[@id='country']");

//await countryDropDown.selectOption('France');

//await countryDropDown.selectOption({label:'France'});

//await countryDropDown.selectOption({index:4});

//await countryDropDown.selectOption({value:'france'});


//1. asserting the numner of options 
//const options = await page.locator('#country option');
//await expect(options).toHaveCount(10);


//2.Getting all the dropdowns 
 const allOptions= await page.$$("//select[@id='country']/option");

 console.log("Number of options:",allOptions.length);
 await expect(allOptions.length).toBe(10);

 let countryStatus = false;      
 for(const option of allOptions){
 //console.log(optionText);
    let optionText = await option.textContent();
    if(optionText.includes('Canada')){
            countryStatus = true;
            break;
    }
 }

expect (countryStatus).toBeTruthy();

//3.getting all the dropdowns from Colors field and checking a particular color

const colorsAllOptions = await page.$$("//select[@id='colors']/option");
console.log("number of options:",colorsAllOptions.length);
expect(colorsAllOptions.length).toBe(7);

let status = false;
for(const option of colorsAllOptions){
    
   let colorsText = await option.textContent();
   if(colorsText.includes('White')){
    status = true;
    break;
   }
   //console.log(colorsText);
}
expect(status).toBeTruthy();

//4. checking simply the presence of a particular color

const colorsContent = await page.locator('//select[@id="colors"]').textContent();

console.log(colorsContent);
await expect(colorsContent.includes('Green')).toBeTruthy();
await expect(colorsContent.includes('Black')).toBeFalsy();

await page.waitForTimeout(5000);

await page.close();
})