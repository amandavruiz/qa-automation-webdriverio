import { SignupLocators } from './locators/SignupPage.locators.js';
import { saveScreenshot } from '../utils/screenshot.js';

export class SignupPage {

  get signupNameInput() { return $(SignupLocators.signupNameInput); }
  get signupEmailInput() { return $(SignupLocators.signupEmailInput); }
  get signupButton() { return $(SignupLocators.signupButton); }

  get titleMrs() { return $(SignupLocators.titleMrs); }
  get nameInput() { return $(SignupLocators.nameInput); }
  get passwordInput() { return $(SignupLocators.passwordInput); }
  get daysDropdown() { return $(SignupLocators.daysDropdown); }
  get monthsDropdown() { return $(SignupLocators.monthsDropdown); }
  get yearsDropdown() { return $(SignupLocators.yearsDropdown); }
  get newsletterCheckbox() { return $(SignupLocators.newsletterCheckbox); }
  get offersCheckbox() { return $(SignupLocators.offersCheckbox); }

  get firstNameInput() { return $(SignupLocators.firstNameInput); }
  get lastNameInput() { return $(SignupLocators.lastNameInput); }
  get companyInput() { return $(SignupLocators.companyInput); }
  get addressInput() { return $(SignupLocators.addressInput); }
  get address2Input() { return $(SignupLocators.address2Input); }
  get countryDropdown() { return $(SignupLocators.countryDropdown); }
  get stateInput() { return $(SignupLocators.stateInput); }
  get cityInput() { return $(SignupLocators.cityInput); }
  get zipcodeInput() { return $(SignupLocators.zipcodeInput); }
  get mobileNumberInput() { return $(SignupLocators.mobileNumberInput); }

  get createAccountButton() { return $(SignupLocators.createAccountButton); }
  get continueButton() { return $(SignupLocators.continueButton); }
  get deleteAccountButton() { return $(SignupLocators.deleteAccountButton); }
  get accountDeletedMessage() { return $(SignupLocators.accountDeletedMessage); }

  async fillSignupForm({ name, email, password, birthDate, personalInfo }) {
    await this.signupNameInput.setValue(name);
    await this.signupEmailInput.setValue(email);
    await saveScreenshot('Nome e e-mail preenchidos');
    await this.signupButton.click();

    await this.titleMrs.click();
    await this.nameInput.setValue(name);
    await this.passwordInput.setValue(password);
    await this.daysDropdown.selectByAttribute('value', birthDate.day);
    await this.monthsDropdown.selectByAttribute('value', birthDate.month);
    await this.yearsDropdown.selectByAttribute('value', birthDate.year);
    await this.newsletterCheckbox.click();
    await this.offersCheckbox.click();
    await saveScreenshot('Dados pessoais preenchidos');

    await this.firstNameInput.setValue(personalInfo.firstName);
    await this.lastNameInput.setValue(personalInfo.lastName);
    await this.companyInput.setValue(personalInfo.company);
    await this.addressInput.setValue(personalInfo.address);
    await this.address2Input.setValue(personalInfo.address2);
    await this.countryDropdown.selectByVisibleText(personalInfo.country);
    await this.stateInput.setValue(personalInfo.state);
    await this.cityInput.setValue(personalInfo.city);
    await this.zipcodeInput.setValue(personalInfo.zipcode);
    await this.mobileNumberInput.setValue(personalInfo.mobileNumber);
    await saveScreenshot(`Campos de endereço preenchidos`);

    await this.createAccountButton.click();
    await saveScreenshot('Usuário cadastrado');
  }
}