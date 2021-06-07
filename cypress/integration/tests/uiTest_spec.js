describe('Cypress.io tests', function() {
    it('Open cypress.io page', function() {
      var cypressPage = 'https://www.cypress.io/'
      cy.visit(cypressPage)
      cy.url().should('include', cypressPage);
      cy.contains('See more features').click();
    })
  })