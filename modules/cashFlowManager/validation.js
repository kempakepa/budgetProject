function validateInput(title, comment, date, amount, category) {
    const stringInput =
        typeof title == 'string' &&
        typeof comment == 'string' &&
        typeof date == 'string' &&
        isValidDate(date) &&
        typeof category == 'string';
    const numberInput = typeof amount == 'number' && amount >= 0;

    return stringInput && numberInput;
}

function isValidDate(date) {
    const regEx =
        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (date.match(regEx)) {
        return true;
    } else {
        return false;
    }
}

module.exports = { validateInput, isValidDate };
