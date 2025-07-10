import { HomePage } from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';

describe('Add Products in Cart', () => {
    it('should add multiple products and verify cart contents', async () => {
        // Arrange
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const cartPage = new CartPage();

        // Act
        await homePage.open();
        await homePage.clickProductsButton();
        await productsPage.addProductToCart(0);
        await productsPage.clickContinueShopping();
        await productsPage.addProductToCart(1);
        await productsPage.clickViewCart();

        // Assert
        const count = await cartPage.getCartItemsCount();
        expect(count).toBe(2);

        await cartPage.validateCartItems();
    });
});