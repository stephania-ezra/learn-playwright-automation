const{test,expect} = require('@playwright/test');

test('LocatingMultipleElements', async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

await page.waitForSelector("//div[@id='tbodyid']//h4/a");

const products = await page.$$("//div[@id='tbodyid']//h4/a")

const productLength = await products.length;
console.log(productLength);

await expect(productLength).toBe(9);

for(const product of products){
    const productText = await product.textContent();
    console.log(productText);
}
})