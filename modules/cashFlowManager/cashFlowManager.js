const { validateInput } = require('./validation.js');
const { changeAccountState } = require('../accountState/accountState.js');

const listAllCostsAndIncomes = [];

function addCost(title, comment, date, amount, category) {
    if (validateInput(title, comment, date, amount, category)) {
        cost = [title, comment, date, -amount, category];
        listAllCostsAndIncomes.push(cost);
        changeAccountState(-amount);
    }
}

function addIncome(title, comment, date, amount, category) {
    if (validateInput(title, comment, date, amount, category)) {
        income = [title, comment, date, amount, category];
        listAllCostsAndIncomes.push(income);
        changeAccountState(amount);
    }
}

function listAllCostAndIncome() {
    return listAllCostsAndIncomes;
}

module.exports = {
    addCost,
    addIncome,
    listAllCostAndIncome,
};
