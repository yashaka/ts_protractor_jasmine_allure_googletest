import { ElementFinder } from 'protractor';
import { Step } from "../core/util/Allure";

export class SearchResult {
    private container : ElementFinder;

    constructor(container : ElementFinder) {
        this.container = container;
    }

    @Step()
    public async followLink() : Promise<void> {
        await this.container.$('a').click();
    }

}
