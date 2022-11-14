class FiltererObject {
    static fillCategory(category) {
        cy.get('#category').select(category, { force: true });
    }

    static fillSubcategory(subcategory) {
        this.getSubcategoryList().select(subcategory);
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
        cy.get('ul#showlist>li').should('not.have.length', 0);
    }

    static getSubcategoryList() {
        return cy.get('#subcategories');
    }

    static getRow(title) {
        return cy.get('li').contains(title);
    }

    static rowContainEditButton(cashFlowItemRow) {
        cashFlowItemRow.find('[data-cy="edit-link"]').should('exist');
    }

    static clickEditButton(title) {
        FiltererObject.getRow(title).find('[data-cy="edit-link"]').click();
    }

    static rowContainText(cashFlowItemRow, value) {
        cashFlowItemRow.should('contain.text', value);
    }
}

module.exports = { FiltererObject };
