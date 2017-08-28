import { browser, $, Key, ElementFinder } from 'protractor';
import { Waiter as WaitFor } from '../core/Waiter';
import { Allure } from "../core/Allure";

export class LoginPage {
    private emailElement: ElementFinder = $("#identifierId");
    private passwordElement: ElementFinder = $("#password input");

    @Allure.Step('Open Gmail Page')
    async open() {
        await browser.get('http://gmail.com');
    }

    @Allure.Step()
    async loginAs(email: string, password: string) {
        await WaitFor.visibilityOf(this.emailElement);
        await this.emailElement.clear();
        await this.emailElement.sendKeys(email + Key.ENTER);
        await Allure.attachScreenshot('screenshot name');

        await WaitFor.visibilityOf(this.passwordElement);
        await this.passwordElement.clear();
        await this.passwordElement.sendKeys(password + Key.ENTER);
    }
}