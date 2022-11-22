const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManager/cashFlowManagerService');
const { filterResults } = require('../../services/filterer/filtererService');
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

    it('should return array elements', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults({}).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid exact title filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['title'], 'api')
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid exact comment filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['comment'], 'api')
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid exact category filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['category'], 'api')
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid date range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['date'], 'api')
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid amount range filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(['amount'], 'api')
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid title uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title'], 'api');
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid comment uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['comment'], 'api');
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by valid category uppercased filter', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['category'], 'api');
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'comment'],
                'api'
            )
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, date)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'date'],
                'api'
            )
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, amount)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'amount'],
                'api'
            )
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, category)', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'category'],
                'api'
            )
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(
            ['title', 'comment'],
            'api'
        );
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'date'], 'api');
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(['title', 'amount'], 'api');
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return at least one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        TestDataProvider.setCustomFilterParamObject(
            ['title', 'category'],
            'api'
        );
        filterResults(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
    it('should return at least one array element by all valid filter criteria', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject());
        filterResults(
            TestDataProvider.setCustomFilterParamObject(
                ['date', 'amount'],
                'api'
            )
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
});
