import { CustomBy as by } from './../core/CustomBy';
import { $, ElementFinder, ElementArrayFinder, browser } from 'protractor';
import { By } from 'selenium-webdriver';
import { Waiter as WaitFor } from '../core/Waiter';
import { Allure } from "../core/Allure";

export class Emails {

    private mailsContainers: ElementArrayFinder;
    private authors: ElementArrayFinder;
    private topics: ElementArrayFinder;
    private messages: ElementArrayFinder;

    public static async instance(mailsContainerLocator: By): Promise<Emails> {
        let emails = new Emails();
        emails.mailsContainers = $("[role='main']").all(mailsContainerLocator).filter(element => element.isDisplayed());
        emails.topics = emails.mailsContainers.$$(".y6 span[id*=':']").filter(element => element.isDisplayed());
        emails.authors = emails.mailsContainers.$$(".yX .yW>span").filter(element => element.isDisplayed());
        emails.topics = emails.mailsContainers.$$(".y6 span[id*=':']").filter(element => element.isDisplayed());
        emails.messages = emails.mailsContainers.$$(".y6 .y2").filter(element => element.isDisplayed());
        return emails;
    }

    @Allure.Step()
    public async shouldHaveTopics(...texts: string[]): Promise<void> {
        // await WaitFor.collectionSize(this.topics, texts.length);
        await browser.sleep(2000);
        expect<any>(await this.topics.getText()).toEqual(texts);
    }

}