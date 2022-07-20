// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// <reference types="Cypress"/>

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(function () {
    cy.visit('/src/index.html')
  })
  it('COMEÇO- Verifica o título da aplicação', function () {
    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('Exec 1- Verifica e Prenche campos Obrigatórios', function () {
    const longText = 'teste, lkandokasjndoiasdioashjdoiashdoiashdaioshdioashduioashdioashdioashdiohasdoihasdoiashdoiashdoiashdioashdioahdoiashjdaiosdhjasoidhasoidhasiodhjasiodhasoisdhasiodhasoidhasoidhasiodhasiodhasiodhaiosdhaoisdhoaishdiaos'
    cy.get('#firstName')
      .type('Eduardo', { delay: 0 })
    cy.get('#lastName')
      .type('Manoel', { delay: 0 })
    cy.get('#email')
      .type('eduardomanoelnn@yahoo.com.br', { delay: 0 })
    cy.get('#phone')
      .type('982070081', { delay: 0 })
    cy.get('#open-text-area')
      .type(longText, { delay: 0 })
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')
  })
  it('Exec 2- Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('#firstName')
      .type('Eduardo')
    cy.get('#lastName')
      .type('Manoel')
    cy.get('#email')
      .type('eduardomanoelnn,yahoo.com.br')
    cy.get('#phone')
      .type('982070081')
    cy.get('#open-text-area')
      .type('teste')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.error')
      .should('be.visible')
  })
  it('Exec 3- Testar Valor Não Numérico no Campo Telefone', function () {
    cy.get('#phone')
      .type('ppp')
      .should('have.value', '')
  })
  it('Exec 4- Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('#firstName')
      .type('Eduardo')
    cy.get('#lastName')
      .type('Manoel')
    cy.get('#email')
      .type('eduardomanoelnn@yahoo.com.br')
    cy.get('#phone-checkbox')
      .click()
    cy.get('#email-checkbox')
      .click()
    cy.get('#open-text-area')
      .type('teste')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.error')
      .should('be.visible')
  })
  it('Exec 5- Preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    cy.get('#firstName').type('Eduardo')
      .clear()
      .should('have.value', '')
    cy.get('#lastName').type('Manoel')
      .clear()
      .should('have.value', '')
    cy.get('#email').type('eduardomanoelnn@yahoo.com.br')
      .clear()
      .should('have.value', '')
    cy.get('#phone-checkbox').click()
    cy.get('#email-checkbox').click()
    cy.get('#phone').type('666')
      .click()
      .should('have.value', '666')
      .clear()
    cy.get('#open-text-area').type('teste')
      .clear()
      .should('have.value', '')
    cy.contains('button', 'Enviar').click()
  })
  it('Exec 6-Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.error')
      .should('be.visible')
  })
  it('Exec 7- Envia o formuário com sucesso usando um comando customizado', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success')
      .should('be.visible')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')
  })
  it('Exec 8- Seleciona o produto You Tube', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')
  })
  it('Exec 9- Seleciona o produto mentoria pelo seu valor', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')
  })
  it('Exec 10- Seleciona um produto por seu indice', function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('#product')
      .select(1)
      .should('have.value', "blog")
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.success')
      .should('be.visible')
  })
  it('Exec 11- Marcar cada tipo de atendimento', function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .click()
      .should('have.value', 'feedback')
  })
  it('Exec 12- Marca ambons ckeckbox,depois desmarcao ultimo', function () {
    cy.get('input[type="checkbox"')
      .check()
      .first()
      .uncheck()
      .should('not.be.checked')
      .last()
      .check()
      .should('be.checked')
  })
  it('Exec 13- Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('#firstName')
      .type('Eduardo')
    cy.get('#lastName')
      .type('Manoel')
    cy.get('#email')
      .type('eduardomanoelnn@yahoo.com.br')
    cy.get('#phone-checkbox')
      .check()
    cy.get('#open-text-area')
      .type('teste')
    cy.contains('button', 'Enviar')
      .click()
    cy.get('.error')
      .should('be.visible')
  })
  it.only('Exec 14- Seleciona um arquivo da pasta fixtures', function () {
    cy.get('input[type="file"]#file-upload')
  })
  it('Exec - Marca cada tipo de atemdimento', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
      })

  })
})
