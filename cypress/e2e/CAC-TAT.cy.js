// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress"/>

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach (function() { 
    cy.visit('src/index.html')
  })
    it('verifica o título da aplicação', function() {
      cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
      // Prenche campos Obrigatórios
      it('Verifica e Prenche campos Obrigatórios', function() {
        const longText='teste, lkandokasjndoiasdioashjdoiashdoiashdaioshdioashduioashdioashdioashdiohasdoihasdoiashdoiashdoiashdioashdioahdoiashjdaiosdhjasoidhasoidhasiodhjasiodhasoisdhasiodhasoidhasoidhasiodhasiodhasiodhaiosdhaoisdhoaishdiaos'
        cy.get('#firstName').type('Eduardo',{delay: 0 })
        cy.get('#lastName').type('Manoel',{delay: 0 })
        cy.get('#email').type('eduardomanoelnn@yahoo.com.br',{delay: 0 })
        cy.get('#phone').type('982070081',{delay: 0 })
        cy.get('#open-text-area').type (longText, {delay: 0 })
        cy.get('button[type="submit"]') .click ()
        cy.get('.success').should ('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Eduardo')
        cy.get('#lastName').type('Manoel')
        cy.get('#email').type('eduardomanoelnn,yahoo.com.br')
        cy.get('#phone').type('982070081')
        cy.get('#open-text-area').type ('teste')
        cy.get('button[type="submit"]') .click ()
        cy.get('.error').should ('be.visible')
    })
    it('Testar Valor Não Numérico no Campo Telefone',function() {
      cy.get('#phone').type('ppp').should('have.value','')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
      cy.get('#firstName').type('Eduardo')
      cy.get('#lastName').type('Manoel')
      cy.get('#email').type('eduardomanoelnn@yahoo.com.br')
      cy.get('#phone-checkbox').click()
      cy.get('#email-checkbox').click()
      //cy.get('#phone').type('666')
      cy.get('#open-text-area').type ('teste')
      cy.get('button[type="submit"]') .click ()
      cy.get('.error').should ('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
      cy.get('#firstName').type('Eduardo')
      .clear()
      .should('have.value','')
      cy.get('#lastName').type('Manoel')
      .clear()
      .should('have.value','')
      cy.get('#email').type('eduardomanoelnn@yahoo.com.br')
      .clear()
      .should('have.value','')
      cy.get('#phone-checkbox').click()
      cy.get('#email-checkbox').click()
      cy.get('#phone').type('666')
      .click()
      .should('have.value','666')
      .clear ()
      cy.get('#open-text-area').type ('teste')
      .clear()
      .should('have.value','')
      cy.get('button[type="submit"]')
       .click ()
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
      cy.get('button[type="submit"]')
      .click ()
      cy.get('.error').should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado',function(){
      cy.fillMandatoryFieldsAndSubmit()
      cy.get('.success').should ('be.visible')
    })
  })