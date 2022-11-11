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
            category: this.categoryRandomSelect(),
            subcategory: this.subCategoryRandomSelect(),
        };
        return this.requestParams;
    }

    static categoryRandomSelect() {
        this.requestParams.category = '';
        let categories = ['Food', 'Salary', 'Taxes', 'Car'];
        this.requestParams.category =
            categories[Math.floor(categories.length * Math.random())];
        return this.requestParams.category;
    }

    static subCategoryRandomSelect() {
        let subcategories = [
            [''],
            ['Biedronka', 'Lidl', 'Auchan'],
            ['Job1', 'Job2', 'Job3'],
            ['Water', 'Power', 'Gas'],
            ['Fuel', 'Service', 'Parts'],
        ];
        let takeIndex = 0;
        switch (this.requestParams.category) {
            case '':
                takeIndex = 0;
                break;
            case 'Food':
                takeIndex = 1;
                break;
            case 'Salary':
                takeIndex = 2;
                break;
            case 'Taxes':
                takeIndex = 3;
                break;
            case 'Car':
                takeIndex = 4;
                break;
            default:
                break;
        }
        this.requestParams.subcategory =
            subcategories[takeIndex][
                Math.floor(subcategories[takeIndex].length * Math.random())
            ];
        return this.requestParams.subcategory;
    }

    static customizeReqParamObject(property, value) {
        const result = this.createReqParamObject();
        if (property == 'category') {
            result[property] = value;
            this.subCategoryRandomSelect();
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
