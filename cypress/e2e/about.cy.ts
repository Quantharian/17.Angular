describe('Test About page', () => {
  it('Visit the About page', () => {
    cy.visit('/about');
    cy.contains('h2', 'About');
    cy.contains('output', '0');
    cy.contains('button', '➕').click();
    cy.contains('output', '1');
  });
  it('Should write in the input', () => {
    cy.get('input').type('Pepe');

    cy.get('input').should('have.value', 'Pepe');
    cy.contains('p', 'Pepe').and('include.text', 'Pepe');
    cy.contains('button', 'Borrar').click();
    cy.contains('p', 'Hola').and('include.text', 'amigo');
  });
});
