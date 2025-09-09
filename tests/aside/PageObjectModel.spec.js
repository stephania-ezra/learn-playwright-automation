import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ViewProductPage } from '../pages/ViewProductPage';
import { CartPage } from '../pages/CartPage';
test.skip('pom Test', async ({ page }) => {


    //login

    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.Login('thilo@gmail.com', 'testing123');
    await page.waitForTimeout(3000);

    //Home Page

    const home = new HomePage(page);
    await home.viewProductButton();
    await page.waitForTimeout(3000);

    //ViewProduct Page
    const view = new ViewProductPage(page);
    await page.waitForTimeout(3000);
    await view.addToCart("Men Tshirt");
    await view.viewCart1();

    //Cart Page
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.checkProductInCart("Men Tshirt");
    expect(status).toBe(true);
});