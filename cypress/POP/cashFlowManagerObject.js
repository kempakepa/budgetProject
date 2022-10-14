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
        this.getTitle().type(title);
    }

    static getComment() {
        return cy.get(this.comment);
    }

    static insertComment(comment) {
        this.getComment().type(comment);
    }

    static getDate() {
        return cy.get(this.date);
    }

    static insertDate(date) {
        this.getDate().type(date);
    }

    static getAmount() {
        return cy.get(this.amount);
    }
    static insertAmount(amount) {
        this.getAmount().type(amount);
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

    static addCost(addInputs) {
        this.selectCost();
        this.insertTitle(addInputs.title);
        this.insertComment(addInputs.comment);
        this.insertDate(addInputs.date);
        this.insertAmount(addInputs.amount);
        this.insertCategory(addInputs.category);
        this.submitCashFlowManagerForm();
    }
    static addIncome(addInputs) {
        this.selectIncome();
        this.insertTitle(addInputs.title);
        this.insertComment(addInputs.comment);
        this.insertDate(addInputs.date);
        this.insertAmount(addInputs.amount);
        this.insertCategory(addInputs.category);
        this.submitCashFlowManagerForm();
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
}

module.exports = { CashFlowManagerObject };
