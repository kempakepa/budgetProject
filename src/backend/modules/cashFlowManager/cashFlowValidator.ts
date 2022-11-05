import { BaseConstructor } from '../../utils/baseConstructor';

export class CashFlowValidator extends BaseConstructor {
    constructor(
        title: string,
        comment: string,
        date: string,
        amount: number,
        category: string
    ) {
        super(title, comment, date, amount, category);
    }

    validateInput() {
        const stringInput =
            this.title != '' &&
            this.comment != '' &&
            this.date != '' &&
            this.isValidDate() &&
            this.category != '';
        const numberInput = this.amount > 0;

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
