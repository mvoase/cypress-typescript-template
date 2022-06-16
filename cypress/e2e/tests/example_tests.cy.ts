describe('Example Functional Tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('should navigate to the homepage of qa demo', () => {
    cy.get('header > a > img').should('be.visible');
    cy.url().should('be.equal', 'https://demoqa.com/');
  });

  it('should navigate to the elements card', () => {
    cy.get('.category-cards > :nth-child(1)').should('be.visible').click();
    cy.get('.main-header').should('be.visible').should('contain', 'Elements');
  });

  it('should fill out the text box form', () => {
    cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible');
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0')
      .should('be.visible')
      .should('contain', 'Text Box')
      .click();
    cy.get('#userName').type('Test');
    cy.get('#userEmail').type('Test@Test.com');
    cy.get('#currentAddress').type('Test');
    cy.get('#permanentAddress').type('Test');
    cy.get('#submit').click();

    cy.get('#name').should('contain', 'Test');
    cy.get('#email').should('contain', 'Test@Test.com');
    cy.get('.border > #currentAddress').should('contain', 'Test');
    cy.get('.border > #permanentAddress').should('contain', 'Test');
  });
});
