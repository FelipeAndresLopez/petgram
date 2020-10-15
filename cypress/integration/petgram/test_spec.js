/* eslint-disable no-undef */
describe('Petgram', () => {
  it('para ver si la app funciona', () => {
    cy.visit('/');
  });

  it('navegamos a una categoría', () => {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('si podemos navegar a la navbar al home', () => {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });

  it('Usuarios no registrados ven el formulario de registro e inicio de sesión al ir a la página de favs', () => {
    cy.visit('/favs/');
    cy.get('form').should('have.length', 2);
  });
});
