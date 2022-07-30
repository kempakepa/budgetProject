class CashFlowManagerObject {
    static selectCost() {
        cy.get('#cost').click();
    }

    static insertTitle(title) {
        cy.get('#title').type(title);
    }

    static insertComment(comment) {
        cy.get('#comment').type(comment);
    }

    static insertDate(date) {
        cy.get('#date').type(date);
    }

    static insertAmount(amount) {
        cy.get('#amount').type(amount);
    }

    static insertCategory(category) {
        cy.get('#category').type(category);
    }

    static submitCashFlowManagerForm() {
        cy.get('[data-cy=sendButton]').click();
    }

    static addCost(costData) {
        this.selectCost();
        this.insertTitle(costData.title);
        this.insertComment(costData.comment);
        this.insertDate(costData.date);
        this.insertAmount(costData.amount);
        this.insertCategory(costData.category);
        this.submitCashFlowManagerForm();
    }
}

module.exports = { CashFlowManagerObject };
