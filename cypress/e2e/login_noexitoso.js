describe('template spec', () => {
  

  /* ==== Test Created with Cypress Studio ==== */
  it('test_no_exitoso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://v2.psicoalianza.com/');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('112558');
    cy.get('#email').type('112558');
    cy.get('#password').clear('1');
    cy.get('#password').type('123456789$$');
    cy.get('.btn').click();
    cy.get('.alert').should('have.class', 'alert');
    //cy.get('.alert').should('have.text', '\n                Estas credenciales no coinciden con nuestros registros.\n            ');
    cy.get('#email').clear('14251103');
    cy.get('#email').type('14251103');
    cy.get('#password').clear('1');
    cy.get('#password').type('123');
    cy.get('.btn').click();
    /* ==== End Cypress Studio ==== */
  });
})