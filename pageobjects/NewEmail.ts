import { $$, $, by, element, Key } from 'protractor';
import { Waiter as WaitFor } from '../core/Waiter';

export class NewEmail {

    public async withRecipients(...recipients: string[]): Promise<NewEmail> {
        await WaitFor.visibilityOf($('[name="to"]')).then(it => { it.sendKeys(recipients.join(', ') + Key.ENTER); });
        return this;
    }

    public async withMessage(message: string): Promise<NewEmail> {
        await $(".editable").sendKeys(message);
        return this;
    }

    public async withTopic(topic: string): Promise<NewEmail> {
        await $("[name='subjectbox']").sendKeys(topic);
        return this;
    }

    public async send() {
        await element(by.xpath('//*[contains(text(), "Send")]')).click();
    }
}