class soportesAlianza{

    elements = {
        endpoint: () => cy.visit('/soportes'),
        soporteBtn: () => cy.get('[href="https://v2.psicoalianza.com/soportes"] > .text-white'),
        titleSubmenu: () => cy.get('#sub-menus > .col-auto'),
        mostrarColumnas: ()=> cy.get('.dropdown > .btn'),
        checkbox: (value) => cy.get(`input.filtro-columna[value="${value}"]`),
        pendiente: () => cy.get(':nth-child(1) > :nth-child(10) > .alert')
    }

    clickSoporte(){
        this.elements.soporteBtn().click()
    }

    clickMostrar(){
        this.elements.mostrarColumnas().click()
    }

   /* selectCheckbox(value) {
        this.elements.checkbox(value).check({ force: true });
      }
   */    


    changeCheckbox(value) {
    this.elements.checkbox(value).then(($checkbox) => {
      if ($checkbox.is(':checked')) {
        cy.wrap($checkbox).uncheck({ force: true });
      } else {
        cy.wrap($checkbox).check({ force: true });
      }
    });
    }
    
}

module.exports = new soportesAlianza();