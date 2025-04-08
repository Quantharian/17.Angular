describe('Test app routes', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('h1').contains('Welcome');
    cy.get('h2').contains('Home');
  });
  it('Visits the film page', () => {
    cy.visit('/films');
    cy.get('h1').contains('Welcome');
    cy.get('h2').contains('Films');
  });
  it('Visits the series page', () => {
    cy.visit('/series');
    cy.get('h1').contains('Welcome');
    cy.get('h2').contains('Series');
  });
  it('Visits about page', () => {
    cy.visit('/about');
    cy.get('h1').contains('Welcome');
    cy.get('h2').contains('About');
    // cy.get('button').click();
  });
});
