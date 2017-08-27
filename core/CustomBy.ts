import {by, By} from 'protractor';

export class CustomBy {

    static text(text : string) {
        return by.xpath('//*[contains(text(), "' + text + '")]');
    }
}