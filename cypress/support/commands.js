cypress.commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Manoel')
    cy.get('#email').type('eduardomanoelnn@yahoo.com.br')
    //cy.get('#phone').type('666')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})




