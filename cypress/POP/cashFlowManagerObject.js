class CashFlowManagerObject {
    static cost = '[data-cy="cost"]';
    static income = '[data-cy="income"]';
    static title = '[data-cy="title"]';
    static comment = '[data-cy="comment"]';
    static date = '[data-cy="date"]';
    static amount = '[data-cy="amount"]';
    static category = '[data-cy="category"]';
    static submitionMessage = '[data-cy="submition_message"]';
    static costAddedConfirmationMessage = 'Cost added successfully';
    static incomeAddedConfirmationMessage = 'Income added successfully';
    static addCostOrIncomeFailureMessage = 'Invalid input';
    static HTMLValidationErrorMessage = 'Please fill in this field.';

    static selectCost() {
        cy.get(this.cost).click();
    }

    static selectIncome() {
        cy.get(this.income).click();
    }

    static getTitle() {
        return cy.get(this.title);
    }

    static insertTitle(title) {
        this.getTitle().type(title, { force: true });
    }

    static getComment() {
        return cy.get(this.comment);
    }

    static insertComment(comment) {
        this.getComment().type(comment, { force: true });
    }

    static getDate() {
        return cy.get(this.date);
    }

    static insertDate(date) {
        this.getDate().type(date, { force: true });
    }

    static getAmount() {
        return cy.get(this.amount);
    }
    static insertAmount(amount) {
        this.getAmount().type(amount, { force: true });
    }

    static getCategory() {
        return cy.get(this.category);
    }

    static insertCategory(category) {
        this.getCategory().select(category);
    }

    static submitCashFlowManagerForm() {
        cy.get('[data-cy=sendButton]').click();
    }

    static insertAllInputs(addInputs) {
        this.insertTitle(addInputs.title);
        this.insertComment(addInputs.comment);
        this.insertDate(addInputs.date);
        this.insertAmount(addInputs.amount);
        if (addInputs.category) {
            this.insertCategory(addInputs.category);
        }
        if (addInputs.subcategory) {
            this.insertSubcategory(addInputs.subcategory);
        }
        this.submitCashFlowManagerForm();
    }

    static addCost(addInputs) {
        this.selectCost();
        this.insertAllInputs(addInputs);
    }
    static addIncome(addInputs) {
        this.selectIncome();
        this.insertAllInputs(addInputs);
    }
    static addCostOrIncome(costOrIncome, addInputs) {
        if (costOrIncome == 'cost') {
            this.addCost(addInputs);
        } else {
            this.addIncome(addInputs);
        }
    }

    static getSubmitionMessage() {
        return cy.get('[data-cy="submition_message"]');
    }

    static inputShouldBeInvalid(element) {
        if (element == 'category') {
            return cy.get(`select#${element}:invalid`).should('have.length', 1);
        } else {
            return cy.get(`input#${element}:invalid`).should('have.length', 1);
        }
    }

    static getSubcategoryList() {
        return cy.get('#subcategories');
    }

    static insertSubcategory(subcategory) {
        this.getSubcategoryList().select(subcategory);
    }
}

module.exports = { CashFlowManagerObject };
