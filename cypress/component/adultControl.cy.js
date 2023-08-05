import { ADULT_KEY, STORAGE_KEY } from 'config/storage';
import { createAppAtRoute } from 'test-utils';


describe('18+ Access', () => {

  it('when the app is first opened, the 18+ notice is presented', () => {

    cy.mount(createAppAtRoute());

    cy.findByRole('heading', {name: /18\+ only/i}).should('exist');

  });

  it('if 18+ has already been accepted then the notice is not shown', () => {

    // Given 18+ has been accepted
    localStorage.setItem(ADULT_KEY, true);

    // When rendered
    cy.mount(createAppAtRoute());

    // Then the main page is shown
    cy.findByRole('heading', {name: /ready to start/i}).should('exist');

});

it('if 18+ is accepted, then the user can use the app', () => {
    
    // When rendered
    cy.mount(createAppAtRoute());

    // Then the 18+ Modal is rendered
    cy.findByRole('heading', {name: /18\+ only/i}).should('exist');

    // When the user accepts the conditions
    cy.findByRole('button', {name: /i agree/i}).click();

    // And they can begin to use the app
    cy.findByRole('heading', {name: /Ready to start/i}).should('exist');

});

it('declining 18+ redirects the user to the 18+ only page', () => {
    
    // When rendered
    cy.mount(createAppAtRoute());

    // Then the 18+ Modal is rendered
    cy.findByRole('heading', {name: /18\+ only/i}).should('exist');

    // When the user declines the conditions
    cy.findByRole('button', {name: /get me out of here/i}).click();

    // Then they are redirected to the 18+ only page
    cy.findByRole('heading', {name: /You need to be over 18 years old/i}).should('exist');

});

it('the user can navigate to the data policy from the 18+ notice', () => {

    // When rendered
    cy.mount(createAppAtRoute());

    // Then the 18+ Modal is rendered
    cy.findByRole('heading', {name: /18\+ only/i}).should('exist');

    // Then the user can navigate the link to the data policy
    cy.findByRole('link', {name: /the data policy/i}).click();
    cy.findByRole('heading', {name: /data policy/i}).should('exist');

});

it('if 18+ is accidentally declined, then the user can accept at a later time', () => {

    // When rendered
    cy.mount(createAppAtRoute());

    // Given the user accidentally declined the policy
    cy.findByRole('button', {name: /get me out of here/i}).click();
    cy.findByRole('heading', {name: /You need to be over 18 years old/i}).should('exist');

    // The user can click the 18+ link and accept the policy
    cy.findByRole('link', {name: /18\+ Policy/i}).click();

    cy.findByRole('button', {name: /i agree/i}).click();

    // And they can begin to use the app
    cy.findByRole('heading', {name: /Ready to start/i}).should('exist');

  });

})