/* ==== Test Created with Cypress Studio ==== */
it('sucess_login', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://v2.psicoalianza.com/');
  cy.get('#email').clear('14251103');
  cy.get('#email').type('14251103');
  cy.get('#password').clear('1');
  cy.get('#password').type('123456789$$');
  cy.get('.btn').click();
  cy.get('[href="https://v2.psicoalianza.com/soportes"] > .text-white').should('have.text', 'Soporte');
  cy.get('[href="https://v2.psicoalianza.com/soportes"] > .text-white').click();
  cy.get('#sub-menus > .col-auto').should('have.text', 'Soportes de clientes');
  cy.get('.dropdown > .btn').should('be.visible');
  cy.get('[data-dt-column="9"] > .dt-column-title').should('have.text', 'Estado');
  cy.get(':nth-child(1) > :nth-child(10) > .alert').should('have.text', 'Pendiente');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="https://v2.psicoalianza.com/soportes"] > .text-white').should('have.class', 'text-white');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.dropdown > .btn').click();
  cy.get(':nth-child(1) > .check-container > .filtro-columna').check();
  cy.get(':nth-child(2) > .check-container > .filtro-columna').check();
  cy.get(':nth-child(3) > .check-container > .filtro-columna').check();
  cy.get(':nth-child(4) > .check-container > .filtro-columna').check();
 // cy.get('.container-fluid > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1)').should('have.text', '\n                            \n                                \n                            ID del soporte\n                        ');
 // cy.get('.container-fluid > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2)').should('have.text', '\n                            \n                                \n                            Categoría de la solicitud\n                        ');
 // cy.get('.dropdown-menu > :nth-child(3)').should('have.text', '\n                            \n                                \n                            Canal receptor\n                        ');
 // cy.get('.dropdown-menu > :nth-child(4)').should('have.text', '\n                            \n                                \n                            Prioridad\n                        ');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="https://v2.psicoalianza.com"] > .text-white').should('have.text', 'Tablero');
  cy.get('[href="https://v2.psicoalianza.com"] > .text-white').click();
  /* ==== End Cypress Studio ==== */
});