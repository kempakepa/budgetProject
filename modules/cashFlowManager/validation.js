//const { AccountState } = require('../accountState/accountState');

const { BaseConstructor } = require('../../utils/baseConstructor');

class Validation extends BaseConstructor {
    constructor(title, comment, date, amount, category) {
        super(title, comment, date, amount, category);
    }

    validateInput() {
        const stringInput =
            typeof this.title == 'string' &&
            this.title != '' &&
            typeof this.comment == 'string' &&
            this.comment != '' &&
            typeof this.date == 'string' &&
            this.date != '' &&
            this.isValidDate(this.date) &&
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

        /* let now = new Date();
        let now2MonthsBefore = now.setMonth(now.getMonth() - 2);
        now2MonthsBefore = now.toISOString().slice(0, 10); */

        let dateStandarizedFormat = new Date(this.date)
            .toISOString()
            .slice(0, 10);

        if (
            this.date == dateStandarizedFormat /* &&
            this.date >= now2MonthsBefore */
        ) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = { Validation };
