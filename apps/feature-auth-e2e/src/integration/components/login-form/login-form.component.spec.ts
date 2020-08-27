describe('feature-auth', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=loginformcomponent--primary&knob-yo=my peeps')
  );

  it('should render the component', () => {
    cy.get('bet-on-my-life-login-form').should('exist');
  });

  it('should have the string "login works" on screen', () => {
    cy.get('.test').contains('peeps');
  });
});
