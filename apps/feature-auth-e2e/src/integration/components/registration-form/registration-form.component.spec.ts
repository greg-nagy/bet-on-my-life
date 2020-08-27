describe('feature-auth', () => {
  beforeEach(() => cy.visit('/iframe.html?id=registrationformcomponent--primary'));

  it('should render the component', () => {
    cy.get('bet-on-my-life-registration-form').should('exist');
  });
});
