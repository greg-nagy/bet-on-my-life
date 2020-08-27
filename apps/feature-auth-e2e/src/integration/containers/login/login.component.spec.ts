describe('feature-auth', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincomponent--primary'));

  it('should render the component', () => {
    cy.get('bet-on-my-life-login').should('exist');
  });
});
