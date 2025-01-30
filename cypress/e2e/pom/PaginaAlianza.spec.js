import homeAlianza from "../../pageObjects/Alianza/homeAlianza";
import soportesAlianza from "../../pageObjects/Alianza/soportesAlianza";

/*describe('POM Implementation', () => {

  before(() => {
    cy.session('login', () => {
      cy.visit('https://v2.psicoalianza.com/');
      homeAlianza.enterUsername('14251103');
      homeAlianza.enterPassword('123456789$$');
      homeAlianza.clickLogin();
      cy.url().should('not.include', '/login');
    });
  });

  beforeEach(() => {
    cy.visit('https://v2.psicoalianza.com/soportes');
  });

  it('Acces to soporte page', () => {
    soportesAlianza.clickSoporte();
    cy.url().should('include', '/soportes');
    soportesAlianza.elements.titleSubmenu().should('have.text', 'Soportes de clientes');
    soportesAlianza.elements.mostrarColumnas().should('be.visible');
    soportesAlianza.clickMostrar();
    cy.wait(2000);
    soportesAlianza.changeCheckbox('columna-id');
    soportesAlianza.changeCheckbox('columna-categoria');
    soportesAlianza.changeCheckbox('columna-canal-receptor');
    soportesAlianza.changeCheckbox('columna-prioridad');
  });

  it('Should change checkboxes', () => {
    soportesAlianza.clickMostrar();
    cy.wait(1000);
    soportesAlianza.changeCheckbox('columna-id');
    soportesAlianza.changeCheckbox('columna-categoria');
    soportesAlianza.changeCheckbox('columna-canal-receptor');
    soportesAlianza.changeCheckbox('columna-prioridad');
  });
});

*/

/*describe('POM Implementation', () => {

    before(() => {
      cy.session('login', () => {
        cy.visit('https://v2.psicoalianza.com/');
        homeAlianza.enterUsername('14251103');
        homeAlianza.enterPassword('123456789$$');
        homeAlianza.clickLogin();
        cy.url().should('not.include', '/login');
      });
    });
  
    beforeEach(() => {
      cy.visit('https://v2.psicoalianza.com/soportes');
      cy.url().should('include', '/soportes'); // Verifica que la sesión esté activa
    });
  
    it('Acces to soporte page', () => {
      soportesAlianza.clickSoporte();
      cy.url().should('include', '/soportes');
      soportesAlianza.elements.titleSubmenu().should('have.text', 'Soportes de clientes');
      soportesAlianza.elements.mostrarColumnas().should('be.visible');
      soportesAlianza.clickMostrar();
      cy.wait(2000);
      soportesAlianza.changeCheckbox('columna-id');
      soportesAlianza.changeCheckbox('columna-categoria');
      soportesAlianza.changeCheckbox('columna-canal-receptor');
      soportesAlianza.changeCheckbox('columna-prioridad');
    });
  
    it('Should change checkboxes', () => {
      soportesAlianza.clickMostrar();
      cy.wait(1000);
      soportesAlianza.changeCheckbox('columna-id');
      soportesAlianza.changeCheckbox('columna-categoria');
      soportesAlianza.changeCheckbox('columna-canal-receptor');
      soportesAlianza.changeCheckbox('columna-prioridad');
    });
  });


  describe('POM Implementation', () => {

  before(() => {
    cy.session('login', () => {
      cy.visit('https://v2.psicoalianza.com/');
      homeAlianza.enterUsername('14251103');
      homeAlianza.enterPassword('123456789$$');
      homeAlianza.clickLogin();
      cy.url().should('not.include', '/login');
    });
  });

  beforeEach(() => {
    cy.visit('https://v2.psicoalianza.com/soportes');
    cy.url().should('include', '/soportes'); // Verifica que la sesión esté activa
  });

  it('Acces to soporte page', () => {
    soportesAlianza.clickSoporte();
    cy.url().should('include', '/soportes');
    soportesAlianza.elements.titleSubmenu().should('have.text', 'Soportes de clientes');
    soportesAlianza.elements.mostrarColumnas().should('be.visible');
    soportesAlianza.clickMostrar();
    cy.wait(2000);
    soportesAlianza.changeCheckbox('columna-id');
    soportesAlianza.changeCheckbox('columna-categoria');
    soportesAlianza.changeCheckbox('columna-canal-receptor');
    soportesAlianza.changeCheckbox('columna-prioridad');
  });

  it('Should change checkboxes', () => {
    soportesAlianza.clickMostrar();
    cy.wait(1000);
    soportesAlianza.changeCheckbox('columna-id');
    soportesAlianza.changeCheckbox('columna-categoria');
    soportesAlianza.changeCheckbox('columna-canal-receptor');
    soportesAlianza.changeCheckbox('columna-prioridad');
  });
}); 
*/

/*describe('POM Implementation', () => {


    before(() => {
      cy.session('login', () => {
        cy.visit('https://v2.psicoalianza.com/');
        homeAlianza.enterUsername('14251103');
        homeAlianza.enterPassword('123456789$$');
        homeAlianza.clickLogin();
        cy.url().should('not.include', '/login');
      });
    });
  
    beforeEach(() => {
      cy.visit('https://v2.psicoalianza.com/soportes');
      cy.url().should('include', '/soportes'); // Verifica que la sesión esté activa
    });
  
    it('Acces to soporte page', () => {
      soportesAlianza.clickSoporte();
      cy.url().should('include', '/soportes');
      soportesAlianza.elements.titleSubmenu().should('have.text', 'Soportes de clientes');
      soportesAlianza.elements.mostrarColumnas().should('be.visible');
      soportesAlianza.clickMostrar();
      cy.wait(2000);
      soportesAlianza.changeCheckbox('columna-id');
      soportesAlianza.changeCheckbox('columna-categoria');
      soportesAlianza.changeCheckbox('columna-canal-receptor');
      soportesAlianza.changeCheckbox('columna-prioridad');
    });
  
    it('Should change checkboxes', () => {
      soportesAlianza.clickMostrar();
      cy.wait(1000);
      soportesAlianza.changeCheckbox('columna-id');
      soportesAlianza.changeCheckbox('columna-categoria');
      soportesAlianza.changeCheckbox('columna-canal-receptor');
      soportesAlianza.changeCheckbox('columna-prioridad');
    });
  });

*/

describe('Pruebas del componente Select2', () => {
  
    beforeEach(() => {
      // Visitar la página donde se encuentra el componente
      cy.visit('/ruta-de-la-pagina');
    });
  
    it('Debería mostrar el menú de opciones al hacer clic', () => {
      // Hacer clic en el componente Select2 para desplegar las opciones
      cy.get('.select2-selection').click();
  
      // Verificar que el menú de opciones está visible
      cy.get('.select2-results__options').should('be.visible');
    });
  
    it('Debería mostrar todas las opciones disponibles', () => {
      cy.get('.select2-selection').click();
  
      // Array con las opciones esperadas
      const opciones = ['Selección', 'Organizacional', 'Vocacional', 'Otro'];
  
      // Verificar que cada opción está presente en el menú
      opciones.forEach((opcion) => {
        cy.get('.select2-results__option').contains(opcion).should('exist');
      });
    });
  
    it('Debería permitir seleccionar cada opción y actualizar el valor', () => {
      const opciones = ['Selección', 'Organizacional', 'Vocacional', 'Otro'];
  
      opciones.forEach((opcion) => {
        // Abrir el menú de opciones
        cy.get('.select2-selection').click();
  
        // Hacer clic en la opción específica
        cy.get('.select2-results__option').contains(opcion).click();
  
        // Verificar que el valor seleccionado se ha actualizado
        cy.get('.select2-selection__rendered').should('contain', opcion);
      });
    });
  
    it('Debería tener la opción "Selección" seleccionada por defecto', () => {
      // Verificar el texto mostrado en el componente
      cy.get('.select2-selection__rendered').should('contain', 'Selección');
    });
  
    it('Debería cambiar el atributo aria-selected al seleccionar una opción', () => {
      cy.get('.select2-selection').click();
  
      // Seleccionar la opción "Organizacional"
      cy.get('.select2-results__option').contains('Organizacional').click();
  
      // Abrir nuevamente el menú para verificar los atributos
      cy.get('.select2-selection').click();
  
      // Verificar que "Organizacional" tiene aria-selected="true"
      cy.get('.select2-results__option[aria-selected="true"]').should('contain', 'Organizacional');
  
      // Verificar que las otras opciones tienen aria-selected="false"
      cy.get('.select2-results__option').contains('Selección').should('have.attr', 'aria-selected', 'false');
      cy.get('.select2-results__option').contains('Vocacional').should('have.attr', 'aria-selected', 'false');
      cy.get('.select2-results__option').contains('Otro').should('have.attr', 'aria-selected', 'false');
    });
  
    it('Debería permitir navegar y seleccionar opciones usando el teclado', () => {
      // Enfocar el componente
      cy.get('.select2-selection').click();
  
      // Presionar tecla "Flecha hacia abajo" para resaltar la primera opción
      cy.get('.select2-search__field').type('{downarrow}');
  
      // Verificar que la opción "Selección" está resaltada
      cy.get('.select2-results__option--highlighted').should('contain', 'Selección');
  
      // Presionar "Flecha hacia abajo" nuevamente para resaltar la siguiente opción
      cy.get('.select2-search__field').type('{downarrow}');
  
      // Verificar que la opción "Organizacional" está resaltada
      cy.get('.select2-results__option--highlighted').should('contain', 'Organizacional');
  
      // Presionar "Enter" para seleccionar la opción resaltada
      cy.get('.select2-search__field').type('{enter}');
  
      // Verificar que el valor seleccionado es "Organizacional"
      cy.get('.select2-selection__rendered').should('contain', 'Organizacional');
    });
  
    // Si el componente permite búsqueda o filtrado
    it('Debería filtrar las opciones al ingresar texto en el campo de búsqueda', () => {
      cy.get('.select2-selection').click();
  
      // Ingresar texto en el campo de búsqueda
      cy.get('.select2-search__field').type('Voc');
  
      // Verificar que solo aparece la opción "Vocacional"
      cy.get('.select2-results__option').should('have.length', 1);
      cy.get('.select2-results__option').should('contain', 'Vocacional');
    });