import {browser, $, Key, ElementFinder} from 'protractor';
import {Waiter as WaitFor} from '../core/Waiter';
declare var allure : any;

export class LoginPage {
    private emailElement : ElementFinder = $("#identifierId");
    private passwordElement : ElementFinder = $("#password input");

    async open() {
        allure.createStep( 'Open gmail page', ()=>{} )();
        
        await browser.get('http://gmail.com');
    }

    async loginAs(email: string, password: string) {
        allure.createStep('Login as "' + email + '" - "' + password + '"', ()=>{} )();

        await WaitFor.visibilityOf(this.emailElement);
        await this.emailElement.clear();
        await this.emailElement.sendKeys(email + Key.ENTER);
        
        await WaitFor.visibilityOf(this.passwordElement);
        await this.passwordElement.clear();
        await this.passwordElement.sendKeys(password + Key.ENTER);
    }
}