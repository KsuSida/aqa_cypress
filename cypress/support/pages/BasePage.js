/// <reference types="cypress" />

export default class BasePage {
  constructor() {
    this.baseURL = 'https://www.saucedemo.com/';
  }
  open(url) {
    cy.visit(`${this.baseURL}${url}`);
  }
}
