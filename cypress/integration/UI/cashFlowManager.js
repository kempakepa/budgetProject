const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');

describe('cashFlowManager tests', () => {
    it('addCost tests - valid input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Cost added successfully');
    });

    /* it('addCost tests - invalid title input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            //title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid comment input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            //comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid date input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: 'comment',
            //date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid amount input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            //amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid category input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            //category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid empty title input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: '',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    });

    it('addCost tests - invalid empty comment input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: '',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        cy.get('[data-cy="submition_message"]')
            .invoke('text')
            .should('equal', 'Invalid input');
    }); */
});
