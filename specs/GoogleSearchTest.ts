import { browser } from 'protractor';
import { Application } from './../core/Application';
import { SearchPage } from './../pageobjects/SearchPage';
import { attachScreenshot } from "../core/util/Allure";

describe('google search tests', function () {
  
  const app: Application = new Application();

  afterEach(async () => {
    await attachScreenshot();
  });

  it('should search for Selenium', async () => {

    await app.google().open();
    
    await app.google().search('Allure Reporting');

    await app.google().results().get(0).then(it => it.followLink());

    await app.allure().shouldBeOpened();

  });

});