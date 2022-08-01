const { HomePageObject } = require('../../POP/homePageObject');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');

describe('accountState test', () => {
    it('should initial accountState be a number value', () => {
        HomePageObject.visitHomePage();
        //cy.visit('./index.html');
        HomePageObject.welcomeMessageIsVisible();
        HomePageObject.goToAccountStateModule();
        /* cy.wait(1);
        cy.get('#accountState')
            .invoke('text')
            .then(parseInt)
            .then(cy.log)
            .should('be.a', 'number')
            .should('equal', 0); */
        HomePageObject.getAccountStateText()
            .then(parseInt)
            .then(cy.log)
            .should('be.a', 'number');
        //cy.get('#accountState').then(parseInt).should('be.a', 'number');
    });
    it('should account state be decreased about 100', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToAccountStateModule();
        HomePageObject.getAccountStateText().then((accountStateText) => {
            cy.log(accountStateText);
            let accountState = parseInt(accountStateText);
            //generate backend data
            sendRequestToAddCostItem({
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 100,
                category: 'Food',
            });
            /* cy.get('[data-cy=cashFlowManager-nav]').click();
            cy.get('#cost').click();
            cy.get('[data-cy=title]').click().type('first cost');
            cy.get('[data-cy=comment]').click().type('first comment');
            cy.get('[data-cy=date]').click().type('2022-07-15');
            cy.get('[data-cy=amount]').click().type('100');
            cy.get('[data-cy=category]').click().type('first category');
            cy.get('[data-cy=sendButton]').click(); */
            //----

            //cy.get('a').contains('Account State module').click();
            cy.reload();
            cy.get('#accountState').should('contain', `${accountState - 100}`);
            /* cy.wait(5);
            cy.get('#accountState')
                .invoke('text')
                .then(parseInt)
                .then(cy.log)
                .should('be.a', 'number')
                .should('equal', -100); */
        });
    });
});
