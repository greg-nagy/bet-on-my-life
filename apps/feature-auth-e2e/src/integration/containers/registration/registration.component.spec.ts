describe('feature-auth', () => {
  beforeEach(() => cy.visit('/iframe.html?id=registrationcomponent--primary'));

  it('should render the component', () => {
    cy.get('bet-on-my-life-registration').should('exist');
  });
});
