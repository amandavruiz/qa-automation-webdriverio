import { ProductDetailLocators } from './locators/ProductDetailPage.locators.js';
import { saveScreenshot } from '../utils/screenshot.js';

export class ProductDetailPage {
  get quantityInput() { return $(ProductDetailLocators.quantityInput); }
  get addToCartBtn() { return $(ProductDetailLocators.addToCartBtn); }

  async setQuantity(qty) {
    await this.quantityInput.waitForDisplayed();
    await this.quantityInput.setValue(qty);
    await saveScreenshot('Aumentar quantidade do produto');
  }

  async clickAddToCart() {
    await this.addToCartBtn.waitForClickable();
    await this.addToCartBtn.click();
  }
}