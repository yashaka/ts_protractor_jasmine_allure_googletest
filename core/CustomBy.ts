import { by } from 'protractor';
import { By } from 'selenium-webdriver';

export class CustomBy {

    static text(text: string): By {
        return by.xpath('//*[contains(text(), "' + text + '")]');
    }

    static css(css: string): By {
        return by.css(css);
    }

    static xpath(xpath: string) {
        return by.xpath(xpath);
    }

    static id(id: string) {
        return by.id(id);
    }

}