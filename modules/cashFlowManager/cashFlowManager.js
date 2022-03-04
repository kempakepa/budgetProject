const listAllCostsAndIncomes = [];
let title = 'zakupy';
let comment = 'lidl';
let date = '2021-03-02';
let amount = 22.55;
let category = 'Food';

function addCost(title, comment, date, amount, category) {
    cost = [title, comment, date, amount, category];
    listAllCostsAndIncomes.push(cost);
}

function addIncome() {
    const income = [title, comment, date, amount, category];
    listAllCostsAndIncomes.push(income);
}

function listAllCostAndIncome() {
    return listAllCostsAndIncomes;
}

module.exports = { addCost, addIncome, listAllCostAndIncome, title, comment, date, amount, category, listAllCostsAndIncomes }
