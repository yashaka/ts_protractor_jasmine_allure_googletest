import { ElementArrayFinder } from 'protractor';
import { SearchResult } from './SearchResult';
import { Step } from "../core/util/Allure";

export class SearchResults {
    private resultsFinder : ElementArrayFinder;

    constructor(resultsFinder : ElementArrayFinder) {
        this.resultsFinder = resultsFinder;
    }

    @Step()
    public async get(index : number) : Promise<SearchResult> {
        return new SearchResult(this.resultsFinder.get(index));
    }
}