import { AllurePage } from './../pageobjects/AllurePage';
import { SearchPage } from './../pageobjects/SearchPage';
import { Step } from "./util/Allure";

export class Application {
    
    @Step('GOOGLE')
    public google() : SearchPage {
        return new SearchPage();
    }

    @Step()
    public allure() : AllurePage {
        return new AllurePage();
    }

}