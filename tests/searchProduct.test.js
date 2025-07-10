import { HomePage } from '../pages/HomePage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

describe('Product Search', () => {
    it('should search for a product and display results', async () => {
        // Arrange
        const homePage = new HomePage()
        const productsPage = new ProductsPage();
        const productName = 'Dress';

        // Act
        await homePage.open();
        await homePage.clickProductsButton();
        await productsPage.searchProduct(productName);

        // Assert
        expect(await productsPage.isSearchedProductsVisible()).toBeTruthy();
        expect(await productsPage.areProductsVisible()).toBeTruthy();
    });
});