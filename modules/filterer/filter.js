const { listAllCostAndIncome } = require('../cashFlowManager/cashFlowManager');

function filterCostAndIncome(title, comment, date, amount, category) {
    const filtered = [];
    const listAllCostsAndIncomes = listAllCostAndIncome();

    for (i = 0; i < listAllCostsAndIncomes.length; i++) {
        if (
            (isParamUndefined(title) ||
                includesAtLeastPartStringToLowerCase(
                    listAllCostsAndIncomes[i][0],
                    title
                )) &&
            (isParamUndefined(comment) ||
                includesAtLeastPartStringToLowerCase(
                    listAllCostsAndIncomes[i][1],
                    comment
                )) &&
            (isParamUndefined(date) ||
                isBetween(listAllCostsAndIncomes[i][2], [date[0], date[1]])) &&
            (isParamUndefined(amount) ||
                isBetween(Math.abs(listAllCostsAndIncomes[i][3]), [
                    amount[0],
                    amount[1],
                ])) &&
            (isParamUndefined(category) ||
                includesAtLeastPartStringToLowerCase(
                    listAllCostsAndIncomes[i][4],
                    category
                ))
        ) {
            filtered.push(listAllCostsAndIncomes[i]);
        }
    }
    return filtered;
}

function isParamUndefined(param) {
    if (param == undefined) {
        return true;
    } else {
        return false;
    }
}

function isBetween(param, [min, max]) {
    if (param >= min && param <= max) {
        return param;
    }
}

function includesAtLeastPartStringToLowerCase(arrayElement, param) {
    return arrayElement.toLowerCase().includes(param.toLowerCase());
}

module.exports = { filterCostAndIncome, isBetween };
