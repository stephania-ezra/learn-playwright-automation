exports.HomePage =

    class HomePage {

        constructor(page) {
            this.page = page;
            this.productList = '//div[@class="col-sm-4"]/div/div/div/p';
            this.viewProduct = "(//a[contains(text(),'View Product')])[2]";
        }

        async viewProductButton() {
            await this.page.locator(this.viewProduct).click();
        }
    }