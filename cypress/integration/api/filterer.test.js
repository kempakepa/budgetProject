const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const {
    filterResults,
    convertToFilterReqParam,
} = require('../../services/filtererService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('filterer test', () => {
    it('should return empty array', () => {
        filterResults(
            'dsefe',
            'dsefe',
            ['dsefe', 'dsefe'],
            [0, 0],
            'dsefe'
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.to.deep.equal([]);
        });
    });

    it('should return +one in count array element', () => {
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            let responseLength = response.body.length;
            expect(response.status).to.equal(200);

            sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
            filterResults(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            ).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(responseLength + 1);
            });
        });
    });

    it('should return one array element by valid exact title filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid exact comment filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            TestDataProvider.requestParams.comment,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid exact category filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            TestDataProvider.requestParams.category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid date range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.date,
                TestDataProvider.requestParams.date
            ),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid amount range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            undefined,
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.amount,
                TestDataProvider.requestParams.amount
            ),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid title uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid comment uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            TestDataProvider.requestParams.comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid category uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            TestDataProvider.requestParams.category.toUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, comment)', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title,
            TestDataProvider.requestParams.comment,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, date)', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title,
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.date,
                TestDataProvider.requestParams.date
            ),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, amount)', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title,
            undefined,
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.amount,
                TestDataProvider.requestParams.amount
            ),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category)', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title,
            undefined,
            undefined,
            undefined,
            TestDataProvider.requestParams.category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            TestDataProvider.requestParams.comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.date,
                TestDataProvider.requestParams.date
            ),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            undefined,
            undefined,
            convertToFilterReqParam(
                TestDataProvider.requestParams.amount,
                TestDataProvider.requestParams.amount
            ),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            TestDataProvider.requestParams.category.toUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
    it('should return +one array element by all valid filter criteria', () => {
        sendRequestToAddCostItem(TestDataProvider.setNewStaticObject());
        filterResults(
            TestDataProvider.requestParams.title,
            TestDataProvider.requestParams.comment,
            convertToFilterReqParam(
                TestDataProvider.requestParams.date,
                TestDataProvider.requestParams.date
            ),
            convertToFilterReqParam(
                TestDataProvider.requestParams.amount,
                TestDataProvider.requestParams.amount
            ),
            TestDataProvider.requestParams.category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
});
