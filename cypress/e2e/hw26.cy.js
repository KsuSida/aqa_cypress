/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('Success login test', () => {
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.url().should('include', 'inventory.html');
  });

  it('Login with incorrect password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('fake-password');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should(
        'eq',
        'Epic sadface: Username and password do not match any user in this service',
      );
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  it('Login with incorrect user name', () => {
    cy.get('[data-test="username"]').type('ksu-try');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should(
        'eq',
        'Epic sadface: Username and password do not match any user in this service',
      );
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service',
    );
  });

  it('Login with empty user name', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Username is required');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username is required',
    );
  });

  it('Login with empty password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Password is required');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Password is required',
    );
  });
});
