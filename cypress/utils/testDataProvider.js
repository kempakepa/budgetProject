const { faker } = require('@faker-js/faker');

let title = `${faker.word.noun()}-${faker.random.numeric()}`;
let comment = `${faker.word.noun()}-${faker.random.numeric()}`;
let date = faker.date.past().toISOString().slice(0, 10);
let amount = parseInt(faker.datatype.float());
let category = `${faker.word.noun()}-${faker.random.numeric()}`;
module.exports = {
    title,
    comment,
    date,
    amount,
    category,
};
