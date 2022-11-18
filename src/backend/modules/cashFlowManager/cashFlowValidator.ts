import { CashFlowItem } from '../../utils/baseInterface';

export class CashFlowValidator {
    static validateInput(cashFlowItem: CashFlowItem) {
        const stringInput =
            typeof cashFlowItem.title == 'string' &&
            cashFlowItem.title != '' &&
            typeof cashFlowItem.comment == 'string' &&
            cashFlowItem.comment != '' &&
            typeof cashFlowItem.date == 'string' &&
            cashFlowItem.date != '' &&
            this.isValidDate(cashFlowItem.date) &&
            typeof cashFlowItem.category == 'string' &&
            cashFlowItem.category != '' &&
            typeof cashFlowItem.subcategory == 'string';
        const numberInput =
            typeof cashFlowItem.amount == 'number' && cashFlowItem.amount > 0;
        return stringInput && numberInput;
    }

    static isValidDate(date: string) {
        const regEx =
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (!date.match(regEx)) {
            return false;
        }

        let dateStandarizedFormat = new Date(date).toISOString().slice(0, 10);

        if (date == dateStandarizedFormat) {
            return true;
        } else {
            return false;
        }
    }
}
