import {Locator, Page, expect} from "@playwright/test";
import UserCredetials from "../helpers/UserCredetials";
import ApplicationURL from "../helpers/ApplicationURL";

export default class LoginPage {
    private page : Page;

    username: string = 'standard_user';
    password: string = 'secret_sauce';

    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.errorMessage = this.page.locator('[data-test="error"]')
    }

    public async loginToApplication(username: string, password: string) {
        let url: string = ApplicationURL.BASE_URL
        await this.page.goto(url);
        await this.validatePageUrl(url);
        await this.usernameField.fill(this.username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        console.log(UserCredetials.USERNAME, UserCredetials.PASSWORD, username, password, this.username, this.password);
    }

    
    public async validatePageUrl(url: string) {
        await expect(this.page).toHaveURL(url, {timeout: 3000});
    }
}