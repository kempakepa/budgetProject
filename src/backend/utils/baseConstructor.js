class BaseConstructor {
    constructor(title, comment, date, amount, category) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
}

module.exports = { BaseConstructor };
