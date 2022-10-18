class FiltererObject {
    static fillCategory(category) {
        cy.get('#category').type(category, { force: true });
    }

    static fillComment(comment) {
        cy.get('#comment').type(comment, { force: true });
    }

    static fillTitle(title) {
        cy.get('#title').type(title, { force: true });
    }

    static fillMinDate(minDate) {
        cy.get('#min-date').type(minDate, { force: true });
    }

    static fillMaxDate(maxDate) {
        cy.get('#max-date').type(maxDate, { force: true });
    }

    static fillMinAmount(minAmount) {
        cy.get('#min-amount').type(minAmount, { force: true });
    }

    static fillMaxAmount(maxAmount) {
        cy.get('#max-amount').type(maxAmount, { force: true });
    }

    static fillFiltererForm(filterInputs) {
        this.fillTitle(filterInputs.title);
        this.fillComment(filterInputs.comment);
        this.fillMinDate(filterInputs.minDate);
        this.fillMaxDate(filterInputs.maxDate);
        this.fillMinAmount(filterInputs.minAmount);
        this.fillMaxAmount(filterInputs.maxAmount);
        this.fillCategory(filterInputs.category);
        this.clickSend();
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

    static shouldFilterAtLeastOneItem() {
        return cy.get('ul#showlist>li').its('length').should('not.equal', 0);
    }
}

module.exports = { FiltererObject };
