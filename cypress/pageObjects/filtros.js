class filtros {

    elements = {

        filterOption: ()=> cy.get('.bi-filter'),
        productolist: () => cy.get('#select2-filtro_tipo_prueba_id-container'),
        productOptions: () => cy.get('.select2-results__option'),
        categoriaList: () => cy.get('#select2-filtro_categoria_id-container'),
        categoriaOptions: () => cy.get('.select2-results__option'),
        canalList: ()=> cy.get('#select2-filtro_origen_id-container'),
        canalOptions: ()=> cy.get('.select2-results__option'),
        tipoMensajeList: ()=> cy.get('#select2-filtro_tipo_mensaje_id-container'),
        tipoMensajeOptions: ()=> cy.get('.select2-results__option'),
        aplicarBtn: ()=> cy.get('#boton-estoy-seguro'),

    }

    clickFilter () {
        this.elements.filterOption().click();
    }

    clickProducto () {
        this.elements.productolist().click();
        this.elements.productOptions().contains('Organizacional').click();
        
    }

    clickCategoria () {
        this.elements.categoriaList().click();
        this.elements.categoriaOptions().contains('Funcionamiento').click();
        
    }

    clickCanal () {
        this.elements.canalList().click();
        this.elements.canalOptions().contains('WhatsApp').click();
        
    }

    clickMensaje () {
        this.elements.tipoMensajeList().click();
        //this.elements.tipoMensajeOptions().contains('WhatsApp').click();
        
    }

    clickAplicar () {
        this.elements.aplicarBtn().click();
        
    }
}

module.exports = new filtros();
