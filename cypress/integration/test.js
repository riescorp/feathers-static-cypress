context('Actions', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3030');
  });

  it('varios 1', () => {
    // #hello => 'Hello World!
    cy.visit('http://localhost:3030/intranet/documents')
      .get('#hello')
      .wait(1000 * 5)
      .eq(1).should('not.be.empty')
      .wait(1000 * 5);
      // .eq(1).should('contain', 'Hello World!');
  });
});
