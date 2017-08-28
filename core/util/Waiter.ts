import {browser, ElementFinder, ElementArrayFinder, ExpectedConditions as EC} from "protractor";

export class Waiter {

    static async visibilityOf(element : ElementFinder) : Promise<ElementFinder> {
        await browser.wait(EC.visibilityOf(element));
        return element;
    }

    static async collectionSize(elements : ElementArrayFinder, size : number) {
        await browser.wait(async () => (await elements.count()) === size );
    }
    
}