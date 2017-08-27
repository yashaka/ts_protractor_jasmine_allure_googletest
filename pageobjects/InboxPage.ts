import {element, by, ElementFinder, $, Key} from 'protractor';
import {Emails} from '../pageobjects/Emails';
import {NewEmail} from '../pageobjects/NewEmail';
import {Waiter as WaitFor} from '../core/Waiter';

export class InboxPage {

    private composeElement : ElementFinder = element(by.xpath('//*[contains(text(), "COMPOSE")]'));

    public async composeEmail(): Promise<NewEmail> {
        await WaitFor.visibilityOf(this.composeElement).then(it => { it.click(); });
        return new NewEmail();
    }

    public async search(searchString: string) {
        await WaitFor.visibilityOf($("#gbqfq")).then(it => { it.sendKeys(searchString + Key.ENTER); });
    }

    public async emails(): Promise<Emails> {
        return await Emails.instance(by.css("tr"));
    }

    public async unreadedEmails(): Promise<Emails> {
        return await Emails.instance(by.css("tr.zE"));
    }

    public async readedEmails(): Promise<Emails> {
        return await Emails.instance(by.css("tr.yO"));
    }
}