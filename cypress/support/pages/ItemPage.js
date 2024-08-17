/// <reference types="cypress" />

import BasePage from './BasePage';

class ItemPage extends BasePage {
  get backToProductsBtn() {
    return cy.get('[data-test="back-to-products"]');
  }

  get itemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get itemImg() {
    return cy.get('.inventory_details_img');
  }

  get itemDescription() {
    return cy.get('[data-test="inventory-item-desc"]');
  }

  get itemPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get addToCartBtn() {
    return cy.get('#add-to-cart');
  }

  get removeBtn() {
    return cy.get('#remove');
  }
}

export default new ItemPage();
