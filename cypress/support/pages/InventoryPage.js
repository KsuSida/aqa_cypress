/// <reference types="cypress" />

import BasePage from './BasePage';

class InventoryPage extends BasePage {
  get cartButton() {
    return cy.get('[data-test="shopping-cart-link"]');
  }
  get burgerMeru() {
    return cy.get('#react-burger-menu-btn');
  }
  get sortContainer() {
    return cy.get('[data-test="product-sort-container"]');
  }
  get sortOptions() {
    return cy.get('[data-test="product-sort-container"] option');
  }

  get inventoryItem() {
    return cy.get('[data-test="inventory-item-description"]');
  }

  get itemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get itemDescription() {
    return cy.get('[div class="inventory-item-description"]');
  }

  get addToCartBtn() {
    return cy.get('[div class="pricebar"] button');
  }

  itemClick(name) {
    this.itemName.contains(`${name}`).click();
  }
}

export default new InventoryPage();
