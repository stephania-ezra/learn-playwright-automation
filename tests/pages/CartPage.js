exports.CartPage =

    class CartPage {

        constructor(page) {
            this.page = page;
            this.noOfProducts = '//table[@id="cart_info_table"]/tbody/tr/td[2]';
        }

        async checkProductInCart(productName) {
            const productsInCart = await this.page.$$(this.noOfProducts);
            for (const product of productsInCart) {
                console.log("Product is:", await product.textContent());
                let productText = await product.textContent();
                if (productText.includes(productName)) {
                    return true;
                    break;
                }

            }
        }
    }
