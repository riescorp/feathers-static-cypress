context('Actions', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3030/intranet/documents');
  });

  it('varios 1', () => {
    // #hello => 'Hello World!
    cy.get('#hello')
      .eq(1).should('not.be.empty')
      // .eq(1).should('contain', 'Hello World!');
  });
});
