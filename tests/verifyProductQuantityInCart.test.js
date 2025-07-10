import { HomePage } from '../pages/HomePage.js';
import { CartPage } from '../pages/CartPage.js';
import { ProductDetailPage } from '../pages/ProductDetailPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

describe('Verify Product Quantity in Cart', () => {
  it('should add quantity 4 of a product and verify in cart', async () => {
    // Arrange
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const productDetailPage = new ProductDetailPage();
    const productsPage = new ProductsPage();

    // Act
    await homePage.open();
    await homePage.clickFirstProductView();
    await productDetailPage.setQuantity(4);
    await productDetailPage.clickAddToCart();
    await productsPage.clickViewCart();

    // Assert
    const qty = await cartPage.getQuantityForProductIndex(0);
    expect(parseInt(qty)).toEqual(4);
  });
});