import { HomeLocators } from './locators/HomePage.locators.js';

export class HomePage {

  get signupLoginButton() { return $(HomeLocators.signupLoginButton); }
  get productsButton() { return $(HomeLocators.productsButton); }
  get firstProductViewBtn() { return $$(HomeLocators.firstProductViewBtn)[0]; }

  async open() {
    await browser.url('/');
  }

  async clickSignupLogin() {
    await this.signupLoginButton.click();
  }

  async clickProductsButton() {
    await this.productsButton.click();
  }

  async clickFirstProductView() {
    await this.firstProductViewBtn.waitForClickable();
    await this.firstProductViewBtn.click();
  }
}