// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@shelex/cypress-allure-plugin';
import './commands'
require('cypress-xpath');

beforeEach(() => {
  
    cy.viewport(1280, 720)
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('https://uat-autoriza-web-latam.smb.sovos.com/marketplace');
})





// Alternatively you can use CommonJS syntax:
// require('./commands')