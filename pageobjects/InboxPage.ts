import { CustomBy as by } from './../core/CustomBy';
import { element, ElementFinder, $, Key } from 'protractor';
import { Emails } from '../pageobjects/Emails';
import { NewEmail } from '../pageobjects/NewEmail';
import { Waiter as WaitFor } from '../core/Waiter';
import { Allure } from "../core/Allure";

export class InboxPage {

    private composeElement: ElementFinder = element(by.text('COMPOSE'));

    @Allure.Step()
    public async composeEmail(): Promise<NewEmail> {
        await WaitFor.visibilityOf(this.composeElement).then(it => { it.click(); });
        return new NewEmail();
    }

    @Allure.Step()
    public async search(searchString: string) {
        await WaitFor.visibilityOf($("#gbqfq")).then(it => { it.sendKeys(searchString + Key.ENTER); });
    }

    @Allure.Step()
    public async emails(): Promise<Emails> {
        return await Emails.instance(by.css("tr"));
    }

    @Allure.Step()
    public async unreadedEmails(): Promise<Emails> {
        return await Emails.instance(by.css("tr.zE"));
    }

    @Allure.Step()
    public async readedEmails(): Promise<Emails> {
        return await Emails.instance(by.css("tr.yO"));
    }
}