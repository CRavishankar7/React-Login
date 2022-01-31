/// <reference types="cypress" />
import {data} from '../fixtures/data';
import {HomePage} from '../support/PageObjects/HomePage'

describe('Test React Login app', function () {
  before(function () {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Verify Login title of the Page', function(){
    cy.get(HomePage.OverviewHeadingLoc).should('have.text', data.OverviewHeadingLabel)
    cy.get(HomePage.HeadingColorLoc).eq(0).should('have.css', 'color', data.HeadingColor)
  })

  it('selects the checkbox', function(){
    cy.get('#checkbox').should('not.be.checked')
    cy.get('#checkbox').check().should('be.checked')
  })

  it('Verify Name, Email, Password text box functionality', function () {
    cy.get(HomePage.NameLoc).type(data.OverviewNameLabel).should('have.value', data.OverviewNameLabel);
    cy.get(HomePage.NameColorLoc).eq(0).should('have.css', 'color', data.Color);
    cy.get(HomePage.EmailLoc).type(data.OverviewEmailLabel).should('have.value', data.OverviewEmailLabel);
    cy.get(HomePage.EmailColorLoc).eq(0).should('have.css', 'color', data.Color);
    cy.get(HomePage.PasswordLoc).type(data.OverviewPasswordLabel).should('have.value', data.OverviewPasswordLabel);
    cy.get(HomePage.PasswordColorLoc).eq(0).should('have.css', 'color', data.Color);
  });

  
  it('Verify Login button functionality', function () {
    cy.get(HomePage.LoginButtonLoc).click()
    cy.get(HomePage.LoginTextLoc).should('have.text', data.LoggedInLabel)
    cy.get(HomePage.LoginBackgroundLoc).eq(0).should('have.css', 'background-color', data.BackgroundColor)
  });

  
  it('Verify Logout button functionality', function () {
    cy.get(HomePage.LogoutButtonLoc).click()
    cy.get(HomePage.HomePageLoc).should('be.visible')
  });

  it('Verify when Invalid Credentials are entered', function(){
    cy.get(HomePage.NameLoc).type(data.OverviewNameLabel).should('have.value', data.OverviewNameLabel)
    cy.get(HomePage.EmailLoc).type(data.InvalidEmailLabel).should('have.value', data.InvalidEmailLabel)
    cy.get(HomePage.PasswordLoc).type(data.InvalidPasswordLabel).should('have.value', data.InvalidPasswordLabel)
    cy.get(HomePage.LoginButtonLoc).click()
    cy.get(HomePage.ErrorLoc).should('have.text', data.ErrorTextLabel)
  });
});
