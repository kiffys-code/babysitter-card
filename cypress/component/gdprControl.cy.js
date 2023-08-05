import { ADULT_KEY, STORAGE_KEY } from 'config/storage';
import { createAppAtRoute } from 'test-utils';

describe('GDPR', () => {
    it('the user can clear their device data, even when they have declined 18+', () => {
  
        // Given the user has data in the app
        // And they accidentally declined the adult policyadult policy
        localStorage.setItem(STORAGE_KEY, JSON.stringify(require('../fixtures/example.json')));
        localStorage.setItem(ADULT_KEY, false);
        cy.expect(localStorage.length).to.equal(2);

      
        // When rendered at the blocking page
        cy.mount(createAppAtRoute('/adult-policy/declined'))
    
        // The user can still navigate to the data policy page
        cy.findByRole('link', {name: /data policy/i})
            .click();
            
        cy.findByRole('heading', {name: /data policy/i})
            .should('exist');
  
        // And they can delete their local data
        cy.findByRole('button', {name: /delete my data/i})
            .click();
    
        // And they are redirected and their data is deleted
        cy.findByRole('heading', {name: /Your data has been successfully removed from this device/i})
            .should('exist')
            .then(() => {
                cy.expect(localStorage.length).to.equal(0);
            })
  
    });

});