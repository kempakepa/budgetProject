class HomePageObject {
    static visitHomePage() {
        cy.visit('./index.html');
    }

    static welcomeMessageIsVisible() {
        cy.get('body > :nth-child(1)').should('be.visible');
    }

    static goToAccountStateModule() {
        cy.get('[data-cy="accountStateLink"]').click();
    }

    static getAccountStateText() {
        return cy
            .get('#accountState')
            .should('not.contain', '---')
            .invoke('text');
    }
}

module.exports = { HomePageObject };
