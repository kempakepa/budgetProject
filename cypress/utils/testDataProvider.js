const { faker } = require('@faker-js/faker');

class TestDataProvider {
    static requestParams = {};

    static generateFakerData(fakerDataType) {
        let returnedFakerData = {
            fakerTextDataType: `${faker.word.noun()}-${faker.random.numeric()}`,
            fakerDataTypeData: faker.date.past().toISOString().slice(0, 10),
            fakerNumericData: parseInt(faker.datatype.float()),
        };
        if (fakerDataType == 'text') {
            return returnedFakerData.fakerTextDataType;
        }
        if (fakerDataType == 'date') {
            return returnedFakerData.fakerDataTypeData;
        }
        if (fakerDataType == 'numeric')
            return returnedFakerData.fakerNumericData;
    }

    static setNewStaticObject() {
        (this.requestParams.title = this.generateFakerData('text')),
            (this.requestParams.comment = this.generateFakerData('text')),
            (this.requestParams.date = this.generateFakerData('date')),
            (this.requestParams.amount = this.generateFakerData('numeric')),
            (this.requestParams.category = this.generateFakerData('text'));
        return this.requestParams;
    }

    static changeObjectValue(property, value) {
        this.setNewStaticObject();
        this.requestParams[property] = value;
        return this.requestParams;
    }
}

module.exports = {
    TestDataProvider,
};
