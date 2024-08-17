/// <reference types="cypress" />

import LoginPage from '../support/pages/LoginPage';
import testData from '../fixtures/credentials.json';

describe('Login tests', () => {
  beforeEach(() => {
    LoginPage.open();
  });
  it('Success login test', () => {
    LoginPage.login(
      testData.userNames.correctUserName,
      testData.passwords.correctPassword,
    );
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.url().should('include', 'inventory.html');
  });

  it('Login with incorrect password', () => {
    LoginPage.login(
      testData.userNames.correctUserName,
      testData.passwords.incorrectPassword,
    );
    LoginPage.verifyErrorMessage(
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  it('Login with incorrect user name', () => {
    LoginPage.login(
      testData.userNames.incorrectUserName,
      testData.passwords.correctPassword,
    );
    LoginPage.verifyErrorMessage(
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  it('Login with empty user name', () => {
    LoginPage.passwordField.type(testData.passwords.correctPassword);
    LoginPage.loginButton.click();
    LoginPage.verifyErrorMessage('Epic sadface: Username is required');
  });

  it('Login with empty password', () => {
    LoginPage.usernameField.type(testData.userNames.correctUserName);
    LoginPage.loginButton.click();
    LoginPage.verifyErrorMessage('Epic sadface: Password is required');
  });
});
