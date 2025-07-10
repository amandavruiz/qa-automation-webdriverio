import allureReporter from '@wdio/allure-reporter';

export async function saveScreenshot(description) {
    const screenshot = await browser.takeScreenshot();
    allureReporter.addAttachment(description, Buffer.from(screenshot, 'base64'), 'image/png');
}