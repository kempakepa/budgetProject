function filterCostAndIncome(
    listAllCostsAndIncomes,
    title,
    comment,
    date,
    amount,
    category
) {
    const filtered = [];

    for (let arrayElement of listAllCostsAndIncomes) {
        if (
            areAllConditionsMet(
                title,
                comment,
                date,
                amount,
                category,
                arrayElement
            )
        ) {
            filtered.push(arrayElement);
        }
    }
    return filtered;
}

function isParamUndefined(param) {
    return param == undefined;
}

function isBetween(param, [min, max]) {
    if (param >= min && param <= max) {
        return param;
    }
}

function includesAtLeastPartStringToLowerCase(arrayElement, param) {
    return arrayElement.toLowerCase().includes(param.toLowerCase());
}

function isUndefinedOrTextIncludesPart(param, arrayElemnt) {
    return (
        isParamUndefined(param) ||
        includesAtLeastPartStringToLowerCase(arrayElemnt, param)
    );
}

function isUndefinedOrIsBetween(param, arrayElemnt) {
    return (
        isParamUndefined(param) || isBetween(arrayElemnt, [param[0], param[1]])
    );
}

function areAllConditionsMet(
    title,
    comment,
    date,
    amount,
    category,
    arrayElement
) {
    if (
        isUndefinedOrTextIncludesPart(title, arrayElement[0]) &&
        isUndefinedOrTextIncludesPart(comment, arrayElement[1]) &&
        isUndefinedOrIsBetween(date, arrayElement[2]) &&
        isUndefinedOrIsBetween(amount, Math.abs(arrayElement[3])) &&
        isUndefinedOrTextIncludesPart(category, arrayElement[4])
    ) {
        return true;
    }
}

module.exports = { filterCostAndIncome };
