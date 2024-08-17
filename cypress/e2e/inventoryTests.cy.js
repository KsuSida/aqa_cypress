/// <reference types="cypress" />

import LoginPage from '../support/pages/LoginPage';
import InventoryPage from '../support/pages/InventoryPage';
import testData from '../fixtures/credentials.json';

describe('Inventory tests', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.login(
      testData.userNames.correctUserName,
      testData.passwords.correctPassword,
    );
  });
  it('Check: Elements are visible', () => {
    InventoryPage.burgerMeru.should('be.visible');
    InventoryPage.sortContainer.should('be.visible');
    InventoryPage.cartButton.should('be.visible');
  });

  it('Check: sort container to have 4 options', () => {
    InventoryPage.sortOptions.should('have.length', 4);
  });

  it('Check: go to the cart', () => {
    InventoryPage.cartButton.click();
    cy.url().should('include', 'https://www.saucedemo.com/cart.html');
  });

  it('Check: item page open', () => {
    let itemName = 'Sauce Labs Bike Light';
    InventoryPage.itemClick(itemName);
    cy.get('[data-test="back-to-products"]').should('exist');
    cy.get('[data-test="inventory-item-name"]').should(
      'have.text',
      `${itemName}`,
    );
  });
});
