const { CashFlowManager } = require('../cashFlowManager/cashFlowManager');

class Filterer {
    filtered = [];

    filterCostAndIncome(
        listAllCostsAndIncomes,
        title,
        comment,
        date,
        amount,
        category
    ) {
        CashFlowManager.listAllCostsAndIncomes = listAllCostsAndIncomes;
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
        {
            const filteredItems = listAllCostsAndIncomes.filter(
                (CostsAndIncome) => this.areAllConditionsMet(CostsAndIncome)
            );
            return filteredItems;
        }
    }

    isParamUndefined(param) {
        return param == undefined;
    }

    isBetween(param, [min, max]) {
        if (param >= min && param <= max) {
            return param;
        }
    }

    includesAtLeastPartStringToLowerCase(arrayElement, param) {
        return arrayElement.toLowerCase().includes(param.toLowerCase());
    }

    isUndefinedOrTextIncludesPart(param, arrayElemnt) {
        return (
            this.isParamUndefined(param) ||
            this.includesAtLeastPartStringToLowerCase(arrayElemnt, param)
        );
    }

    isUndefinedOrIsBetween(param, arrayElemnt) {
        return (
            this.isParamUndefined(param) ||
            this.isBetween(arrayElemnt, [param[0], param[1]])
        );
    }

    areAllConditionsMet(arrayElement) {
        if (
            this.isUndefinedOrTextIncludesPart(this.title, arrayElement[0]) &&
            this.isUndefinedOrTextIncludesPart(this.comment, arrayElement[1]) &&
            this.isUndefinedOrIsBetween(this.date, arrayElement[2]) &&
            this.isUndefinedOrIsBetween(
                this.amount,
                Math.abs(arrayElement[3])
            ) &&
            this.isUndefinedOrTextIncludesPart(this.category, arrayElement[4])
        ) {
            return true;
        }
    }
}

module.exports = { Filterer };
