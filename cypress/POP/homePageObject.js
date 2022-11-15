class HomePageObject {
    static visitHomePage() {
        cy.visit('http://localhost:8080');
    }

    static welcomeMessageIsVisible() {
        cy.get('body > :nth-child(1)').should('be.visible');
    }

    static goToAccountStateModule() {
        cy.get('[data-cy="accountStateLink"]').click();
    }
    static goToCashFlowManagerModule() {
        cy.get('[data-cy="cashFlowManagerLink"]').click();
    }

    static goToFiltererModule() {
        cy.get('[data-cy="filtererLink"]').click();
    }
}

module.exports = { HomePageObject };
