class crearSopote{

    elements = {
        addSoporte: ()=> cy.get('.ps-lg-0 > .btn'),
        empresa: ()=> cy.get('#select2-empresa_id-container'),
        listEmpresa:() => cy.get('.select2-results__option'),
        cardCliente: ()=> cy.get('#imagen_usuario-seleccionado'),
        telfCliente: () => cy.get('#telefono_usuario'),
        productCliente: () => cy.get('#select2-tipo_prueba_id-container'),
        categCliente: () => cy.get('#select2-categoria_id-container'),
        canalCliente: ()=> cy.get('#select2-origen_id-container'),
        description: () => cy.get('.ck.ck-content.ck-editor__editable'),
        crearBtn: ()=> cy.get('.w-100.btn.btn-primary.justify-content-center'),
        msgExitoso: () => cy.get('#contenedor-alert-toast > .alert'),
    }
    
    clickAddSoporte(){
        this.elements.addSoporte().click();
    }

    clickEmpresa() {
        this.elements.empresa().click();
        cy.get('.select2-search__field').type('psi', { force: true });
        
    }

    selectEmpresa(){
        this.elements.listEmpresa().click();
    }

   

    enterTelf(telefono){
        this.elements.telfCliente().type(telefono);
    }

    selectProducto(){
        this.elements.productCliente().click();
    }

    selectCategoria(){
        this.elements.categCliente().click();
    }

    selectCanal(){
        this.elements.canalCliente().click();
    }

    editDescrip (descripcion){
        this.elements.description().type(descripcion);
    }

    clickBtn (){
        this.elements.crearBtn().click();
    }

    
}

module.exports = new crearSopote();