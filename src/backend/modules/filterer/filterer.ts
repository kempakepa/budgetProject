import { CashFlowManager } from '../cashFlowManager/cashFlowManager';

export class Filterer {
    filtered = [];
    title: string | undefined;
    comment: string | undefined;
    date: string[] | undefined;
    amount: number[] | undefined;
    category: string | undefined;
    subcategory: string | undefined;

    filterCostAndIncome(
        listAllCostsAndIncomes: any,
        title: string | undefined,
        comment: string | undefined,
        date: string[] | undefined,
        amount: number[] | undefined,
        category: string | undefined,
        subcategory?: string | undefined
    ) {
        CashFlowManager.listAllCostsAndIncomes = listAllCostsAndIncomes;
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
        this.subcategory = subcategory;
        {
            const filteredItems = listAllCostsAndIncomes.filter(
                (CostsAndIncome: any) =>
                    this.areAllConditionsMet(CostsAndIncome)
            );
            return filteredItems;
        }
    }

    isParamUndefined(param: any) {
        return param == undefined;
    }

    isBetween(param: any, [min, max]: any) {
        if (param >= min && param <= max) {
            return param;
        }
    }

    includesAtLeastPartStringToLowerCase(arrayElement: any, param: any) {
        return arrayElement.toLowerCase().includes(param.toLowerCase());
    }

    isUndefinedOrTextIncludesPart(param: any, arrayElemnt: any) {
        return (
            this.isParamUndefined(param) ||
            this.includesAtLeastPartStringToLowerCase(arrayElemnt, param)
        );
    }

    isUndefinedOrIsBetween(param: any, arrayElemnt: any) {
        return (
            this.isParamUndefined(param) ||
            this.isBetween(arrayElemnt, [param[0], param[1]])
        );
    }

    areAllConditionsMet(arrayElement: any) {
        if (
            this.isUndefinedOrTextIncludesPart(this.title, arrayElement[1]) &&
            this.isUndefinedOrTextIncludesPart(this.comment, arrayElement[2]) &&
            this.isUndefinedOrIsBetween(this.date, arrayElement[3]) &&
            this.isUndefinedOrIsBetween(
                this.amount,
                Math.abs(arrayElement[4])
            ) &&
            this.isUndefinedOrTextIncludesPart(
                this.category,
                arrayElement[5]
            ) &&
            this.isUndefinedOrTextIncludesPart(
                this.subcategory,
                arrayElement[6]
            )
        ) {
            return true;
        }
    }
}
