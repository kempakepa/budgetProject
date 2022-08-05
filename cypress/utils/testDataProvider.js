const { faker } = require('@faker-js/faker');

let title = faker.word.noun();
let comment = faker.word.noun();
let date = faker.date.past().toISOString().slice(0, 10);
let amount = parseInt(faker.datatype.float());
let category = faker.word.noun();

module.exports = {
    title,
    comment,
    date,
    amount,
    category,
};
