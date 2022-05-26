//const { AccountState } = require('../accountState/accountState');

const { BaseConstructor } = require('../../utils/baseConstructor');

class Validation extends BaseConstructor {
    constructor(title, comment, date, amount, category) {
        super(title, comment, date, amount, category);
    }

    validateInput() {
        const stringInput =
            typeof this.title == 'string' &&
            typeof this.comment == 'string' &&
            typeof this.date == 'string' &&
            this.isValidDate(this.date) &&
            typeof this.category == 'string';
        const numberInput = typeof this.amount == 'number' && this.amount >= 0;

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

module.exports = { Validation };
