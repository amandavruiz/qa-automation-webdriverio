import { HomePage } from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';

describe('Remove Products From Cart', () => {
    it('should remove a product from the cart and verify', async () => {
        // Arrange
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const cartPage = new CartPage();

        // Act
        await homePage.open();
        await productsPage.addProductToCart();
        await productsPage.clickViewCart();
        await cartPage.removeFirstProductFromCart();

        // Assert
        const isRemoved = await cartPage.isProductRemoved();
        expect(isRemoved).toBe(true);

        const isEmptyCartTextCorrect = await cartPage.validateEmptyCartText();
        expect(isEmptyCartTextCorrect).toBe(true);
    });
});