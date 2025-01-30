describe('template spec', () => {
  
})

/* ==== Test Created with Cypress Studio ==== */
it('crear_soporte', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://v2.psicoalianza.com/');
  cy.get('#email').clear('14251103');
  cy.get('#email').type('14251103');
  cy.get('#password').clear('1');
  cy.get('#password').type('123456789$$');
  cy.get('.btn').click();

  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[href="https://v2.psicoalianza.com/soportes"]').click();
  cy.get('.ps-lg-0 > .btn').should('be.visible');
  cy.get('.ps-lg-0 > .btn').click();


  cy.get('.card-body').should('have.class', 'card-body');

  cy.get('#imagen_usuario-seleccionado').should('have.id', 'imagen_usuario-seleccionado');


  //cy.get('#telefono_usuario').type('122222222222');
  //cy.get('#modal-formulario').click();
  cy.get('#select2-tipo_prueba_id-container').should('have.id', 'select2-tipo_prueba_id-container');

  cy.get('#select2-categoria_id-container').should('have.id', 'select2-categoria_id-container');

  cy.get('#select2-origen_id-container').should('have.id', 'select2-origen_id-container');

  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */


  // Select the "Organizacional" option
  // cy.get('#select2-tipo_prueba_id-container').click();
  //cy.get('.select2-selection--single').should('have.attr', 'aria-expanded', 'true');

  // Verify that the selected option is displayed correctly
  //cy.get('.select2-selection__rendered').should('have.text', 'Organizacional');


  /* ==== Generated with Cypress Studio ==== */
  cy.get('#select2-empresa_id-container').click();
  cy.get('.select2-search__field').clear();
  cy.get('.select2-search__field').type('psi');
  cy.get('#imagen_usuario-seleccionado').should('have.class', 'imagen-usuario-card');
  cy.get('#nombre_usuario-seleccionado').should('have.id', 'nombre_usuario-seleccionado');
  /* ==== End Cypress Studio ==== */
})