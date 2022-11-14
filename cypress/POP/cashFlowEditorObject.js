class CashFlowEditorObject {
    static typeTitle(value) {
        CashFlowEditorObject.getTitleInput().clear().type(value);
    }

    static typeComment(value) {
        CashFlowEditorObject.getCommentInput().clear().type(value);
    }

    static typeDate(value) {
        CashFlowEditorObject.getDateInput().clear().type(value);
    }

    static typeAmount(value) {
        CashFlowEditorObject.getAmountInput().clear().type(value);
    }

    static selectCategory(value) {
        CashFlowEditorObject.getCategoryInput().select(value);
    }

    static titleShouldHaveValue(value) {
        CashFlowEditorObject.getTitleInput().should('have.value', value);
    }

    static commentShouldHaveValue(value) {
        CashFlowEditorObject.getCommentInput().should('have.value', value);
    }

    static dateShouldHaveValue(value) {
        CashFlowEditorObject.getDateInput().should('have.value', value);
    }

    static amountShouldHaveValue(value) {
        CashFlowEditorObject.getAmountInput().should('have.value', value);
    }

    static categoryShouldHaveValue(value) {
        CashFlowEditorObject.getCategoryInput().should('have.value', value);
    }

    static clickIncomeButton() {
        CashFlowEditorObject.getIncomeRadioButton().click();
    }

    static clickUpdateButton() {
        CashFlowEditorObject.getUpdateButton().click();
    }

    static costRadioButtonShouldBeChecked() {
        CashFlowEditorObject.getCostRadioButton().should('be.checked');
    }

    static getTitleInput() {
        return cy.get('[data-cy="title"]');
    }

    static getCommentInput() {
        return cy.get('[data-cy="comment"]');
    }

    static getDateInput() {
        return cy.get('[data-cy="date"]');
    }

    static getAmountInput() {
        return cy.get('[data-cy="amount"]');
    }

    static getCategoryInput() {
        return cy.get('[data-cy="category"]');
    }

    static getCostRadioButton() {
        return cy.get('[data-cy="cost"]');
    }

    static getIncomeRadioButton() {
        return cy.get('[data-cy="income"]');
    }

    static getUpdateButton() {
        return cy.get('[data-cy="update-button"]');
    }
}

module.exports = { CashFlowEditorObject };
