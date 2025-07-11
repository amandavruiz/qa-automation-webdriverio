import { ProductsLocators } from './locators/ProductsPage.locators.js';
import { saveScreenshot } from '../utils/screenshot.js';

export class ProductsPage {

    get searchInput() { return $(ProductsLocators.searchInput); }
    get searchButton() { return $(ProductsLocators.searchButton); }
    get searchedProductsTitle() { return $(ProductsLocators.searchedProductsTitle); }
    get products() { return $$(ProductsLocators.productWrapper); }
    get productList() { return $$(ProductsLocators.productList); }
    get continueShoppingBtn() { return $(ProductsLocators.continueShoppingBtn); }
    get viewCartBtn() { return $(ProductsLocators.viewCartBtn); }

    async searchProduct(productName) {
        await this.searchInput.setValue(productName);
        await this.searchButton.click();
    }

    async isSearchedProductsVisible() {
        return await this.searchedProductsTitle.isDisplayed();
    }

    async areProductsVisible() {
        const products = await $$(ProductsLocators.productList);
        console.log(`${products.length} itens encontrados`);
        if (products.length === 0) {
            console.log('Nenhum produto foi encontrado!');
            return false;
        }
        for (const product of products) {
            if (!(await product.isDisplayed())) {
                console.log('Um dos produtos não está visível');
                return false;
            }
        }
        await saveScreenshot('Todos os produtos estão visíveis!');
        return true;
    }

    async addProductToCart(index = 0) {
        const products = await this.products;

        if (products.length <= index) {
            throw new Error(`Produto de índice ${index} não encontrado. Total encontrado: ${products.length}`);
        }

        const selectedProduct = products[index];
        await selectedProduct.moveTo();
        const addToCartButton = await selectedProduct.$(ProductsLocators.addToCartBtn);
        await addToCartButton.waitForDisplayed({ timeout: 5000 });
        await addToCartButton.click();
        await saveScreenshot('Produto adicionado ao carrinho');
    }

    async clickContinueShopping() {

        await this.continueShoppingBtn.waitForDisplayed({ timeout: 5000 });
        await this.continueShoppingBtn.click();
        await saveScreenshot('Continuando compras');
    }

    async clickViewCart() {
        await this.viewCartBtn.waitForDisplayed({ timeout: 5000 });
        await this.viewCartBtn.click();
        await saveScreenshot('Abrindo carrinho');
    }
}