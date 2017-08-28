import { SearchResults } from './SearchResults';
import { ElementFinder, $, $$, Key, browser } from 'protractor';
import { Step } from "../core/util/Allure";

export class SearchPage {
    private searchInput: ElementFinder = $("#lst-ib");

    @Step()
    public async open(): Promise<void> {
        await browser.get('http://google.com/ncr');
    }
    
    @Step()
    public async search(text : string): Promise<void> {
        await this.searchInput.sendKeys(text + Key.ENTER);
    }

    @Step()
    public results(): SearchResults {
        return new SearchResults($$(".g .r"));
    }

}