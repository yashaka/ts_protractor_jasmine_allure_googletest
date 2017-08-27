import { $$, $, by, element, Key } from 'protractor';
import { Waiter as WaitFor } from '../core/Waiter';
declare var allure : any;

export class NewEmail {

    public async withRecipients(...recipients: string[]): Promise<NewEmail> {
        allure.createStep( 'with recipients "' + recipients + '"', ()=>{} )();
        await WaitFor.visibilityOf($('[name="to"]')).then(it => { it.sendKeys(recipients.join(', ') + Key.ENTER); });
        return this;
    }

    public async withMessage(message: string): Promise<NewEmail> {
        allure.createStep( 'with message "' + message + '"', ()=>{} )();
        await $(".editable").sendKeys(message);
        return this;
    }

    public async withTopic(topic: string): Promise<NewEmail> {
        allure.createStep( 'with topic "' + topic + '"', ()=>{} )();
        await $("[name='subjectbox']").sendKeys(topic);
        return this;
    }

    public async send() {
        allure.createStep( 'Send', ()=>{} )();
        await element(by.xpath('//*[contains(text(), "Send")]')).click();
    }
}