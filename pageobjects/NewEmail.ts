import { CustomBy as by } from './../core/CustomBy';
import { $, element, Key } from 'protractor';
import { Waiter as WaitFor } from '../core/Waiter';
import { Allure } from "../core/Allure";

export class NewEmail {

    @Allure.Step()
    public async withRecipients(...recipients: string[]): Promise<NewEmail> {
        await WaitFor.visibilityOf($('[name="to"]')).then(it => { it.sendKeys(recipients.join(', ') + Key.ENTER); });
        return this;
    }

    @Allure.Step()
    public async withMessage(message: string): Promise<NewEmail> {
        await $(".editable").sendKeys(message);
        return this;
    }

    @Allure.Step()
    public async withTopic(topic: string): Promise<NewEmail> {
        await $("[name='subjectbox']").sendKeys(topic);
        return this;
    }

    @Allure.Step()
    public async send() {
        await element(by.xpath('//*[contains(text(), "Send")]')).click();
    }
}