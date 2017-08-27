import {element, by, $, ElementFinder, ElementArrayFinder, browser} from 'protractor';
import { InboxPage } from './../pageobjects/InboxPage';
import { LoginPage } from './../pageobjects/LoginPage';
declare var allure : any;

describe('protractorjs tests', function () {
  const loginPage: LoginPage = new LoginPage();
  const inboxPage: InboxPage = new InboxPage();
  const email: string = "aleksander.popov.93@gmail.com";
  const password: string = "";
  const messageTopic: string = "unic topic21";

  // it('gmail test', async () => {
  //   await loginPage.open();
  //   await loginPage.loginAs(email, password);
  //   await inboxPage.composeEmail()
  //             .then(it => it.withRecipients('aleksander.popov.93@gmail.com')
  //             .then(it => it.withTopic(messageTopic)
  //             .then(it => it.send())));
  //   await inboxPage.search(messageTopic);
    
  //   await inboxPage.emails()
  //     .then(it => it.shouldHaveTopics(messageTopic));
  // });

  it('test for allure', async () => {
    browser.get('https://angularjs.org');

    allure.createStep('Filling data', function () {
      allure.createStep('Fill todo text', function () {})();
    })();

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    allure.feature("fail");
    // If the test name is not enough to desribe your test, you can also provide
    // a desription in this way. Markdown is also supported, if you enable this
    // via second argument
    allure.description(
      "this test should be **failed** for example purposes",
      "markdown"
    );
    
    allure.createStep('another internal step', function () {
      allure.createStep('failed', function () {throw new Error('Expected error to test failing step')})();
    })();

  });

});

