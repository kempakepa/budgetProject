const { AccountState } = require('../accountState/accountState.js');
const { Validation } = require('./validation.js');

class CashFlowManager {
    static listAllCostsAndIncomes = [];

    addCost(title, comment, date, amount, category) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
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
            CashFlowManager.listAllCostsAndIncomes.push(this.cost);
            new AccountState().changeAccountState(-this.amount);
        }
    }

    addIncome(title, comment, date, amount, category) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
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
            CashFlowManager.listAllCostsAndIncomes.push(this.income);
            new AccountState().changeAccountState(this.amount);
        }
    }

    listAllCostAndIncome() {
        return CashFlowManager.listAllCostsAndIncomes;
    }
}

module.exports = {
    CashFlowManager,
};
