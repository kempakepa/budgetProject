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
            category: 'Food',
            subcategory: this.subCategorySelection(this.category),
        };
        return this.requestParams;
    }

    static subCategorySelection(category) {
        this.requestParams.subcategory = '';
        switch (category) {
            case '':
                this.requestParams.subcategory = '';
                break;
            case 'Food':
                this.requestParams.subcategory = 'Biedronka';
                break;
            case 'Salary':
                this.requestParams.subcategory = 'Job1';
                break;
            case 'Taxes':
                this.requestParams.subcategory = 'Water';
                break;
            case 'Car':
                this.requestParams.subcategory = 'Fuel';
                break;
            default:
                break;
        }
        return this.requestParams.subcategory;
    }

    static customizeReqParamObject(property, value) {
        const result = this.createReqParamObject();
        if (property == 'category') {
            result[property] = value;
            this.subCategorySelection();
        } else {
            result[property] = value;
        }
        return result;
    }

    static setDefaultFilterParamObject() {
        (this.filtererReqParams.title = undefined),
            (this.filtererReqParams.comment = undefined),
            (this.filtererReqParams.date = undefined),
            (this.filtererReqParams.amount = undefined),
            (this.filtererReqParams.category = undefined),
            (this.filtererReqParams.subcategory = undefined);
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
                this.filtererReqParams[key] = value.toUpperCase();
            }
        }
        return this.filtererReqParams;
    }
}

module.exports = {
    TestDataProvider,
};
