import { browser } from 'protractor';
declare var allure: any;

export module Allure {

    export function Step(optionalTitleName = '') {
        return (target, methodName, descriptor) => {
            let originalMethod = descriptor.value;

            descriptor.value = function () {
                
                (arguments as any)._map = [].map;
                let args = (arguments as any)._map(a => JSON.stringify(a)).join();

                let completeTitle: string = (optionalTitleName.length === 0 ? toStepTitle(methodName) : optionalTitleName)
                    + (args.length === 0 ? '' : ' [' + args + ']');

                allure.createStep(completeTitle, () => { })();

                return originalMethod.apply(this, arguments);
            }
        }
    }

    export async function attachScreenshot(description = 'Screenshot') {
        await browser.takeScreenshot().then((png) => {
            allure.createAttachment(description, () => {
                return new Buffer(png, 'base64');
            }, 'image/png')();
        });
    }

    function toStepTitle(methodName: string): string {
        return methodName
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
    }
    
}