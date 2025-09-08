import { HomePage } from "./HomePage";
exports.ViewProductPage =

    class ViewProductPage {


        constructor(page) {
            this.page = page;
            this.addToCartButton = "//button[normalize-space()='Add to cart']";
            this.viewCart = '//*[@id="cartModal"]/div/div/div[2]/p[2]/a/u';
        }

        async addToCart(productName) {

            this.page.on('dialog', async dialog => {
                if (dialog.message().includes('added')) {
                    expect(dialog.message()).toContain('Your product has been added to cart');
                    await dialog.accept();
                }
            })

            await this.page.locator(this.addToCartButton).click();

        }
        async viewCart1() {
            await this.page.locator(this.viewCart).click();
        }
    }