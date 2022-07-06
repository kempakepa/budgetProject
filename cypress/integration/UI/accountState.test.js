describe('accountState test', () => {
    it('check if initial accountState is 0', () => {
        cy.visit('./index.html');
        cy.get('body > :nth-child(1)').should('be.visible');
        cy.get('[data-cy="accountStateLink"]').click();
        cy.wait(1);
        cy.get('#accountState')
            .invoke('text')
            .then(parseInt)
            .then(cy.log)
            .should('be.a', 'number')
            .should('equal', 0);

        cy.get('[data-cy=cashFlowManager-nav]').click();
        cy.get('#cost').click();
        cy.get('[data-cy=title]').click().type('first cost');
        cy.get('[data-cy=comment]').click().type('first comment');
        cy.get('[data-cy=date]').click().type('2022-07-15');
        cy.get('[data-cy=amount]').click().type('100');
        cy.get('[data-cy=category]').click().type('first category');
        cy.get('[data-cy=sendButton]').click();

        cy.get('a').contains('Account State module').click();
        cy.wait(5);
        cy.get('#accountState')
            .invoke('text')
            .then(parseInt)
            .then(cy.log)
            .should('be.a', 'number')
            .should('equal', -100);
    });
});
