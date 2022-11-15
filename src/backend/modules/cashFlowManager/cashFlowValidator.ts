import { BaseConstructor } from '../../utils/baseConstructor';

export class CashFlowValidator extends BaseConstructor {
    constructor(
        title: string,
        comment: string,
        date: string,
        amount: number,
        category: string,
        subcategory?: string
    ) {
        super(title, comment, date, amount, category, subcategory);
    }

    validateInput() {
        const stringInput =
            typeof this.title == 'string' &&
            this.title != '' &&
            typeof this.comment == 'string' &&
            this.comment != '' &&
            typeof this.date == 'string' &&
            this.date != '' &&
            this.isValidDate() &&
            typeof this.category == 'string' &&
            this.category != '';
        const numberInput = typeof this.amount == 'number' && this.amount > 0;

        return stringInput && numberInput;
    }

    isValidDate() {
        const regEx =
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (!this.date.match(regEx)) {
            return false;
        }

        let dateStandarizedFormat = new Date(this.date)
            .toISOString()
            .slice(0, 10);

        if (this.date == dateStandarizedFormat) {
            return true;
        } else {
            return false;
        }
    }
}
