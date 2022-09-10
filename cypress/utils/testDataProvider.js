const { faker } = require('@faker-js/faker');

class TestDataProvider {
    static requestParams = {};
    static filtererReqParams = {};

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
        if (fakerDataType == 'numeric') {
            return returnedFakerData.fakerNumericData;
        }
    }

    static createReqParamObject() {
        (this.requestParams.title = this.generateFakerData('text')),
            (this.requestParams.comment = this.generateFakerData('text')),
            (this.requestParams.date = this.generateFakerData('date')),
            (this.requestParams.amount = this.generateFakerData('numeric')),
            (this.requestParams.category = this.generateFakerData('text'));
        return this.requestParams;
    }

    static customizeReqParamObject(property, value) {
        this.createReqParamObject();
        this.requestParams[property] = value;
        return this.requestParams;
    }

    static setDefaultFilterParamObject() {
        (this.filtererReqParams.title = undefined),
            (this.filtererReqParams.comment = undefined),
            (this.filtererReqParams.date = undefined),
            (this.filtererReqParams.amount = undefined),
            (this.filtererReqParams.category = undefined);
        return this.filtererReqParams;
    }

    static setCustomFilterParamObject(property) {
        this.setDefaultFilterParamObject();
        for (let prop of property) {
            if (prop == 'date' || prop == 'amount') {
                this.filtererReqParams[
                    prop
                ] = `[${this.requestParams[prop]},${this.requestParams[prop]}]`;
            } else {
                this.filtererReqParams[prop] = this.requestParams[prop];
            }
        }
        return this.filtererReqParams;
    }

    static modifyFilterParamObjectToUpperCase() {
        for (let [key, value] of Object.entries(this.filtererReqParams)) {
            if (typeof value == 'string') {
                key = value.toUpperCase();
                this.filtererReqParams[key] = value;
            }
        }
        return this.filtererReqParams;
    }
}

module.exports = {
    TestDataProvider,
};
