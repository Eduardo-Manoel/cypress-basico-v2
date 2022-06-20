Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Manoel')
    cy.get('#email').type('eduardomanoelnn@yahoo.com.br')
    cy.get('#phone').type('982070081')
    cy.get('#open-text-area').type ('teste')
    cy.get('button[type="submit"]') .click ()
})