/// <reference types="cypress" />

describe('API tests', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    cy.contains('Sign In').click();
    cy.get('#signinEmail').type('Ksuniasida@gmail.com');
    cy.get('#signinPassword').type('zHiqR52i.6iAXV');
    cy.contains('Login').click();
  });

  it('API test-1: 5 brands', () => {
    cy.request('GET', 'https://qauto.forstudy.space/api/cars/brands').then(
      response => {
        cy.log(JSON.stringify(response.body.data));
        const data = response.body.data;
        expect(data.length).to.be.eq(5);
        expect(data[0].title).to.eq('Audi');
      },
    );
  });

  it('API test-2: models', () => {
    cy.request('GET', 'https://qauto.forstudy.space/api/cars/models').then(
      response => {
        cy.log(JSON.stringify(response.body.data));
        const data = response.body.data;
        expect(data.length).to.be.eq(23);
        expect(data[15].title).to.eq('911');
      },
    );
  });

  it('API test-3: post a car', () => {
    const auth = {
      email: 'Ksuniasida@gmail.com',
      password: 'zHiqR52i.6iAXV',
      remember: true,
    };
    cy.request(
      'POST',
      'https://qauto.forstudy.space/api/auth/signin',
      auth,
    ).then(response => {
      expect(response.status).to.equal(200);
    });

    const newCar = {
      carBrandId: 1,
      carModelId: 1,
      mileage: 122,
    };
    cy.request('POST', 'https://qauto.forstudy.space/api/cars', newCar)
      .as('postResponse')
      .its('body.status')
      .should('eq', 'ok');

    cy.get('@postResponse')
      .its('body.data.carBrandId')
      .should('eq', newCar.carBrandId);
    cy.get('@postResponse')
      .its('body.data.carModelId')
      .should('eq', newCar.carModelId);
    cy.get('@postResponse')
      .its('body.data.mileage')
      .should('eq', newCar.mileage);
  });
});
