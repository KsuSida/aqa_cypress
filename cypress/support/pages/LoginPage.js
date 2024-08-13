/// <reference types="cypress" />

import BasePage from './BasePage';

class LoginPage extends BasePage {
  get usernameField() {
    return cy.get('#user-name');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
  }

  open() {
    super.open('');
  }

  login(userName, password) {
    this.usernameField.type(userName);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  verifyErrorMessage(text) {
    this.errorMessage.should('have.text', text);
  }
}

export default new LoginPage();
