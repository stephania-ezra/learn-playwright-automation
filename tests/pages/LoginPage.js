exports.LoginPage =
    class LoginPage {

        constructor(page) {
            this.page = page;
            this.emailAddress = '//input[@data-qa="login-email"]';
            this.password = '//input[@placeholder="Password"]';
            this.loginButton = '//button[normalize-space()="Login"]';
        }

        async gotoLoginPage() {
            await this.page.goto("https://www.automationexercise.com/login");
        }

        async Login(userName, password) {

            await this.page.locator(this.emailAddress).fill(userName);
            await this.page.locator(this.password).fill(password);
            await this.page.locator(this.loginButton).click();

        }
    }
