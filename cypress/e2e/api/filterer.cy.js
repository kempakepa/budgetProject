const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { filterResults } = require('../../services/filtererService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('filterer test', () => {
    it('should return empty array', () => {
        filterResults(TestDataProvider.createReqParamObject()).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.to.deep.equal([]);
            }
        );
    });

    it('should return +one in count array element', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults({}).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid exact title filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid exact comment filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['comment'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid exact category filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['category'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid date range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['date'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid amount range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['amount'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid title uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid comment uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['comment']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by valid category uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['category']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, comment)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title', 'comment'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, date)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title', 'date'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, amount)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title', 'amount'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title', 'category'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'comment']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'date']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'amount']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return +one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'category']);
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
    it('should return +one array element by all valid filter criteria', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['date', 'amount'])
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
});
