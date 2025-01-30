import homeAlianza from "../../pageObjects/Alianza/homeAlianza";
import soportesAlianza from "../../pageObjects/Alianza/soportesAlianza";
import crearSoporte from "../../pageObjects/Alianza/crearSoporte";


describe('POM Implementation', () => {

    before(() => {
        cy.session('login', () => {
          cy.visit('https://v2.psicoalianza.com/');
          homeAlianza.enterUsername('14251103');
          homeAlianza.enterPassword('123456789$');
          homeAlianza.clickLogin();
          cy.url().should('not.include', '/login');
        });
      });

   beforeEach(() => {
        cy.visit('https://v2.psicoalianza.com/soportes');
               
    });
  
    it('Acces to soporte page', ()=> {
        /*homeAlianza.enterUsername('14251103');
        homeAlianza.enterPassword('123456789$$');
        homeAlianza.clickLogin();
       */
        //Ingreso a sección Soprte de Clientes
        soportesAlianza.clickSoporte();
        cy.url().should('include', '/soportes'); //Verificación del Endpoint
        soportesAlianza.elements.titleSubmenu().should('have.text', 'Soportes de clientes');
        soportesAlianza.elements.mostrarColumnas().should('be.visible');

        // Desplegar checklist

        soportesAlianza.clickMostrar();
        cy.wait(1000);
        soportesAlianza.changeCheckbox('columna-id');
        soportesAlianza.changeCheckbox('columna-categoria');
        soportesAlianza.changeCheckbox('columna-canal-receptor');
        soportesAlianza.changeCheckbox('columna-prioridad');
        // Alternar el estado del checkbox "Prioridad"
        soportesAlianza.changeCheckbox('columna-prioridad');
        cy.wait(3000);
        // Sale del checklist
        soportesAlianza.clickMostrar();

        // Verificar el registro Pendiente
        soportesAlianza.elements.pendiente().should('have.text', 'Pendiente');

        cy.wait(1000);

        // Crear Soporte
        crearSoporte.elements.addSoporte().should('have.text', '\n                    Crear soporte\n                ');
        crearSoporte.elements.addSoporte().scrollIntoView().should('be.visible');
        crearSoporte.clickAddSoporte();
        // Verifica card vacía
        crearSoporte.elements.cardCliente().should('have.class', 'imagen-usuario-card');
        // Selecciona empresa
        crearSoporte.clickEmpresa();
        cy.wait(3000);
        crearSoporte.selectEmpresa();
        // Validar que cargó un cliente
        cy.wait(1000);
        crearSoporte.elements.cardCliente().should('have.id', 'imagen_usuario-seleccionado');
        crearSoporte.elements.cardCliente().should('have.class', 'imagen-usuario-card');


        //Validar campos y llenar
        crearSoporte.elements.telfCliente().should('have.id', 'telefono_usuario');
        crearSoporte.enterTelf('321415263');
        cy.wait(1000);
        crearSoporte.elements.productCliente().should('have.id', 'select2-tipo_prueba_id-container');
        crearSoporte.selectProducto();
        cy.wait(1000);
        crearSoporte.elements.categCliente().should('have.id', 'select2-categoria_id-container');
        crearSoporte.selectCategoria();
        cy.wait(1000);
        crearSoporte.elements.canalCliente().should('have.id', 'select2-origen_id-container');
        crearSoporte.selectCanal();
        cy.wait(1000);

        //


        /* ==== Generated with Cypress Studio ==== */

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.ck-blurred').click();
        cy.get('.ps-1 > .w-100').click();
        cy.get('.alert > .col > .row > .col-12').should('have.text', '\n                        Soporte creado correctamente\n                    ');
        /* ==== End Cypress Studio ==== */
    });

   /* it('Should change checkboxes', () => {
      soportesAlianza.clickMostrar();
        
        cy.wait(2000);
        soportesAlianza.changeCheckbox('columna-id');
      soportesAlianza.changeCheckbox('columna-categoria');
      soportesAlianza.changeCheckbox('columna-canal-receptor');
      soportesAlianza.changeCheckbox('columna-prioridad');

         // Alternar el estado del checkbox "Prioridad"
            soportesAlianza.changeCheckbox('columna-prioridad');
            cy.wait(3000);

            
    });
       
    
 /* 
   

        crearSoporte.elements.addSoporte().scrollIntoView().should('be.visible');
        crearSoporte.clickAddSoporte();
        
        //crearSoporte.elements.empresa().should('have.id', 'select2-empresa_id-container');
        cy.wait(3000);
*/
    



 /*   it('Should show error message', ()=> {
        homeAlianza.enterUsername('usuarioincorrecto');
        homeAlianza.enterPassword('123456789$$');
        homeAlianza.clickLogin();
        homeAlianza.elements.errorMessage().should('have.text', '\n                Estas credenciales no coinciden con nuestros registros.\n            ');
    })

*/
    })