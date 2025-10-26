/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    cy.get('#username').type('juniorodrigueslol578@gmail.com')
    cy.get('#password').type('Juuninho1*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juniorodrigueslol578 (não é juniorodrigueslol578? Sair)')    
});

});