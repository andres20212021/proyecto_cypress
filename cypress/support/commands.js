// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ingresar_campos', (dni,nombre,apellido1,apellido2,email1,email2) => { 
        cy.xpath("//input[@placeholder='Número DNI']").should('be.visible').type(dni)
        cy.xpath("//input[@placeholder='Nombres']").should('be.visible').type(nombre)
        cy.xpath("//input[@placeholder='Apellido Paterno']").should('be.visible').type(apellido1)
        cy.xpath("//input[@placeholder='Apellido Materno']").should('be.visible').type(apellido2)
        cy.xpath("(//input[@placeholder='ejemplo@gmail.com'])[1]").should('be.visible').type(email1)
        cy.xpath("(//input[@placeholder='ejemplo@gmail.com'])[2]").should('be.visible').type(email2)
})