class FiltererObject {
    static fillCategory(category) {
        cy.get('#category').type(category);
    }

    static fillComment(comment) {
        cy.get('#comment').type(comment);
    }

    static clickSend() {
        cy.get('[type="button"]').click();
    }

    static incomeShouldBe(expectedValue) {
        cy.get('[data-cy="incomeSummary"]').should('have.text', expectedValue);
    }

    static costsShouldBe(expectedValue) {
        cy.get('[data-cy="costSummary"]').should('have.text', expectedValue);
    }

    static balanceShouldBe(expectedValue) {
        cy.get('[data-cy="balanceSummary"]').should('have.text', expectedValue);
    }
}

module.exports = { FiltererObject };
