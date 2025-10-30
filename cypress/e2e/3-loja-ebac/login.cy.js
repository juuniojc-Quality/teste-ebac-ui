/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('my-account')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
it('Deve fazer login com sucesso', () => { 
    cy.get('#username').type('juniorodrigueslol578@gmail.com')
    cy.get('#password').type('Juuninho1*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juniorodrigueslol578 (não é juniorodrigueslol578? Sair)')    
});

it('Deve exibir uma mensagem de erro ao inserir usuário inválido ', () => {
    cy.get('#username').type('opa@gmail.com')
    cy.get('#password').type('Juuninho1*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('exist')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('juniorodrigueslol578@gmail.com')
    cy.get('#password').type('135*')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail juniorodrigueslol578@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error > li').should('exist')
});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juniorodrigueslol578 (não é juniorodrigueslol578? Sair)')      
});

it('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario , { log: false})
        cy.get('#password').type(dados.senha , { log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juniorodrigueslol578 (não é juniorodrigueslol578? Sair)') 
    })
});

});