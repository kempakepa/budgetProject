const { AccountState } = require('../accountState/accountState.js');
const { CashFlowValidator } = require('./cashFlowValidator');

class CashFlowManager {
    static listAllCostsAndIncomes = [];

    addCost(title, comment, date, amount, category) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
        if (
            new CashFlowValidator(
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
            AccountState.changeAccountState(-this.amount);
            return 'Cost added successfully';
        } else {
            return 'Invalid input';
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
            AccountState.changeAccountState(this.amount);
            return 'Income added successfully';
        } else {
            return 'Invalid input';
        }
    }

    listAllCostAndIncome() {
        return CashFlowManager.listAllCostsAndIncomes;
    }
}

module.exports = {
    CashFlowManager,
};
