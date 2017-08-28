import { browser } from 'protractor';
import { Step } from "../core/util/Allure";

export class AllurePage {
    @Step()
    public async shouldBeOpened() {
        expect(await browser.getTitle()).toEqual('Allure | Test report and framework for writing self-documented tests');
    }
}