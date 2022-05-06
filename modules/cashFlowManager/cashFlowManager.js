const { Validation } = require('./validation.js');

class CashFlowManager extends Validation {
    listAllCostsAndIncomes = [];

    addCost() {
        if (
            new Validation(
                this.title,
                this.comment,
                this.date,
                this.amount,
                this.category
            ).validateInput()
        ) {
            this.cost = [
                this.title,
                this.comment,
                this.date,
                -this.amount,
                this.category,
            ];
            this.listAllCostsAndIncomes.push(this.cost);
            this.changeAccountState(-this.amount);
        }
    }

    addIncome() {
        if (
            new Validation(
                this.title,
                this.comment,
                this.date,
                this.amount,
                this.category
            ).validateInput()
        ) {
            this.income = [
                this.title,
                this.comment,
                this.date,
                this.amount,
                this.category,
            ];
            this.listAllCostsAndIncomes.push(this.income);
            this.changeAccountState(this.amount);
        }
    }

    listAllCostAndIncome() {
        return this.listAllCostsAndIncomes;
    }
}

module.exports = {
    CashFlowManager,
};
