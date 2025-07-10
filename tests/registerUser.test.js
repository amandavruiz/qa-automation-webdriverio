import { HomePage } from '../pages/HomePage.js';
import { SignupPage } from '../pages/SignupPage.js';
import { generateUserData } from '../utils/dataGenerator.js';

describe('User Registration', () => {
  it('should register and delete a user successfully', async () => {
    const homePage = new HomePage();
    const signupPage = new SignupPage();

    // Arrange:
    const userData = generateUserData();

    // Act
    await homePage.open();
    await homePage.clickSignupLogin();
    await signupPage.fillSignupForm(userData);
    await signupPage.continueButton.click();
    await signupPage.deleteAccountButton.click();

    // Assert
    await expect(signupPage.accountDeletedMessage).toBeDisplayed();
  });
});