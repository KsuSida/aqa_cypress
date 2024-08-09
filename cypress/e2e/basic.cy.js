/// <reference types="cypress" />

describe('Basic queries', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/ ');
  });
  it.only('GET', () => {
    cy.get('#login-button');
    cy.get('[data-test="username"]');
    cy.contains('input', 'Login');
    // cy.get('form').find('#input');
    cy.get('[placeholder="Username"]').type('Test string');
    //cy.get('[placeholder="Username"]').invoke('val').should('eq', 'Test');
    cy.contains('input', 'Login').invoke('hide');
    cy.contains('input', 'Login').invoke('show');
    //cy.title().its('length').should('eq', 24);

    cy.get('[placeholder="Password"]').parent().prev();
    cy.get('[placeholder="Password"]').parent().siblings('.form_group');
    cy.get('input').filter('[placeholder="Username"]');
    cy.get('input').not('[placeholder="Username"]');

    cy.get('[data-test="login-button"]').as('loginButton');
    cy.get('@loginButton').click();
    cy.get('[data-test="error"]')
      .invoke('text')
      .should('eq', 'Epic sadface: Password is required');
    cy.get('input').each(($item, index, $list) => {
      // $item - поточний елемент
      // index - індекс поточного елемента
      // $list - список всіх елементів
      cy.wrap($item).click(); //наприклад, натискання на кожен елемент
    });
    cy.log('DEBUG:');
    cy.get('[data-test="error"]')
      .invoke('text')
      .then(text => {
        cy.log(text);
      });
  });
});
