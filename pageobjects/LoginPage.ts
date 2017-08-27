import {browser, $, Key, ElementFinder} from 'protractor';
import {Waiter as WaitFor} from '../core/Waiter';
declare var allure : any;

export class LoginPage {
    private emailElement : ElementFinder = $("#identifierId");
    private passwordElement : ElementFinder = $("#password input");

    async open() {
        // await browser.get('http://gmail.com');
        // allure.createStep('Open gmail page', async () => {
        //     await browser.get('http://gmail.com');
        // });
        await LoginPage.dostep('asd', async () => {
            await browser.get("http://google.com/ncr");
        });
    }

    static async dostep(description : string, stepmethod :  () => void) {
        allure.createStep(description, stepmethod);
    }

    async loginAs(email: string, password: string) {
        await WaitFor.visibilityOf(this.emailElement);
        await this.emailElement.clear();
        await this.emailElement.sendKeys(email + Key.ENTER);
        
        await WaitFor.visibilityOf(this.passwordElement);
        await this.passwordElement.clear();
        await this.passwordElement.sendKeys(password + Key.ENTER);
    }
}