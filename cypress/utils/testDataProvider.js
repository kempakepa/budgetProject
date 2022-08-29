const { faker } = require('@faker-js/faker');

function generateFakeTextData() {
    return `${faker.word.noun()}-${faker.random.numeric()}`;
}

function generateFakeDatatypeData() {
    return faker.date.past().toISOString().slice(0, 10);
}
function generateFakeNumeicData() {
    return parseInt(faker.datatype.float());
}

module.exports = {
    generateFakeTextData,
    generateFakeDatatypeData,
    generateFakeNumeicData,
};
