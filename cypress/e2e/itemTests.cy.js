/// <reference types="cypress" />

import LoginPage from '../support/pages/LoginPage';
import InventoryPage from '../support/pages/InventoryPage';
import ItemPage from '../support/pages/ItemPage';
import testData from '../fixtures/credentials.json';

let itemName = 'Sauce Labs Bike Light';

describe('Item tests', () => {
  beforeEach(() => {
    LoginPage.open();
    LoginPage.login(
      testData.userNames.correctUserName,
      testData.passwords.correctPassword,
    );
    let ItemPage;
    ItemPage = InventoryPage.itemClick(itemName);
  });

  it('Check: Elements are visible', () => {
    ItemPage.itemName.should('be.visible');
    ItemPage.itemName.should('have.text', `${itemName}`);
    ItemPage.itemDescription.should('be.visible');
    ItemPage.itemPrice.should('be.visible');
    ItemPage.itemImg.should('be.visible');
  });

  it('Check Remote btn is visible after click on Add to cart', () => {
    ItemPage.addToCartBtn.click();
    ItemPage.removeBtn.should('be.visible');
  });

  it('Check Add to car btn is visible after click on Remove', () => {
    ItemPage.addToCartBtn.click();
    ItemPage.removeBtn.click();
    ItemPage.addToCartBtn.should('be.visible');
  });
});
