import { CartLocators } from './locators/CartPage.locators.js';
import { saveScreenshot } from '../utils/screenshot.js';

export class CartPage {
    get cartItems() { return $$(CartLocators.cartItems); }

    async getCartItemsCount() {
        const items = await this.cartItems;
        console.log(`Total de produtos no carrinho: ${items.length}`);
        return items.length;
    }

    async getQuantityForProductIndex(index) {
        const items = await this.cartItems;
        if (items.length <= index) throw new Error('Índice inválido');
        const qtyButton = await items[index].$(CartLocators.cartItemQuantityButton);
        const qtyText = await qtyButton.getText();
        return parseInt(qtyText);
    }

    async getUnitPriceForProductIndex(index) {
        const items = await this.cartItems;
        if (items.length <= index) throw new Error('Índice inválido');
        const priceElem = await items[index].$(CartLocators.cartItemUnitPrice);
        const priceText = await priceElem.getText();
        return this._parsePrice(priceText);
    }

    async getSubtotalForProductIndex(index) {
        const items = await this.cartItems;
        if (items.length <= index) throw new Error('Índice inválido');
        const subtotalElem = await items[index].$(CartLocators.cartItemSubtotal);
        const subtotalText = await subtotalElem.getText();
        return this._parsePrice(subtotalText);
    }

    async getTotalCartPrice() {
        const totalElem = await $(CartLocators.cartTotalAmount);
        const totalText = await totalElem.getText();
        return this._parsePrice(totalText);
    }

    _parsePrice(priceText) {
        return parseInt(priceText.replace(/\D/g, ''), 10);
    }

    async validateCartItems() {
        const items = await this.cartItems;
        const count = items.length;
        for (let i = 0; i < count; i++) {
            const qty = await this.getQuantityForProductIndex(i);
            const unitPrice = await this.getUnitPriceForProductIndex(i);
            const subtotal = await this.getSubtotalForProductIndex(i);

            console.log(`Produto ${i + 1}: unitPrice=${unitPrice}, qty=${qty}, subtotal exibido=${subtotal}, subtotal calculado=${unitPrice * qty}`);
            await saveScreenshot('Itens no carrinho');

            if (subtotal !== unitPrice * qty) {
                throw new Error(`Subtotal incorreto para produto ${i + 1}`);
            }
        }
    }

    async removeFirstProductFromCart() {
        const removeButtons = await $$(CartLocators.removeProductButton);

        if (removeButtons.length > 0) {
            await removeButtons[0].click();
        } else {
            throw new Error('Nenhum botão de remoção encontrado no carrinho.');
        }
    }

    async isProductRemoved() {
        await browser.pause(2000);
        const products = await $$(CartLocators.cartProductList);
        return products.length === 0;
    }

    async validateEmptyCartText() {
        const emptyCartElement = await $(CartLocators.emptyCartText);
        await emptyCartElement.waitForDisplayed({ timeout: 2000 });
        const text = await emptyCartElement.getText();
        await saveScreenshot('Carrinho vazio');
        return text === 'Cart is empty!';
    }
}