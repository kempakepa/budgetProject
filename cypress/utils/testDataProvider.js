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
        this.requestParams = {
            title: this.generateFakerData('text'),
            comment: this.generateFakerData('text'),
            date: this.generateFakerData('date'),
            amount: this.generateFakerData('numeric'),
            category: this.generateFakerData('text'),
        };
        return this.requestParams;
    }

    static customizeReqParamObject(property, value) {
        const result = this.createReqParamObject();
        result[property] = value;
        return result;
    }

    static setDefaultFilterParamObject(testLevel) {
        if (testLevel == 'api') {
            (this.filtererReqParams.title = undefined),
                (this.filtererReqParams.comment = undefined),
                (this.filtererReqParams.date = undefined),
                (this.filtererReqParams.amount = undefined),
                (this.filtererReqParams.category = undefined);
        } else if (testLevel == 'UI') {
            (this.filtererReqParams.title = `{selectAll}{del}`),
                (this.filtererReqParams.comment = `{selectAll}{del}`),
                (this.filtererReqParams.minDate = `{selectAll}{del}`),
                (this.filtererReqParams.maxDate = `{selectAll}{del}`),
                (this.filtererReqParams.minAmount = `{selectAll}{del}`),
                (this.filtererReqParams.maxAmount = `{selectAll}{del}`),
                (this.filtererReqParams.category = `{selectAll}{del}`);
        } else {
            console.log('Error!');
        }
        return this.filtererReqParams;
    }

    static setCustomFilterParamObject(property, testLevel) {
        this.setDefaultFilterParamObject(testLevel);
        for (let prop of property) {
            if (testLevel == 'api') {
                if (prop == 'date' || prop == 'amount') {
                    this.filtererReqParams[
                        prop
                    ] = `[${this.requestParams[prop]},${this.requestParams[prop]}]`;
                } else {
                    this.filtererReqParams[prop] = this.requestParams[prop];
                }
            }
            if (testLevel == 'UI') {
                if (prop == 'date') {
                    this.filtererReqParams.minDate = this.requestParams.date;
                    this.filtererReqParams.maxDate = this.requestParams.date;
                } else if (prop == 'amount') {
                    this.filtererReqParams.minAmount =
                        this.requestParams.amount;
                    this.filtererReqParams.maxAmount =
                        this.requestParams.amount;
                } else {
                    this.filtererReqParams[prop] = this.requestParams[prop];
                }
            }
        }
        console.log(this.filtererReqParams);
        return this.filtererReqParams;
    }

    static modifyFilterParamObjectToUpperCase() {
        for (let [key, value] of Object.entries(this.filtererReqParams)) {
            if (typeof value == 'string') {
                this.filtererReqParams[key] = value.toUpperCase();
            }
        }
        return this.filtererReqParams;
    }
}

module.exports = {
    TestDataProvider,
};
