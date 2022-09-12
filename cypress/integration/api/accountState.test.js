const {
    getCurrentAccountState,
} = require('../../services/accountStateService');
const {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} = require('../../services/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('accountState test', () => {
    it('should initial accountState be a number value', () => {
        getCurrentAccountState().then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.accountStateValue).to.not.undefined;
        });
    });

    it('should account state be decreased about amount', () => {
        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            const requestBody = TestDataProvider.createReqParamObject();

            sendRequestToAddCostItem(requestBody);
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState - requestBody.amount
                );
            });
        });
    });
    it('should account state be increased about amount', () => {
        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            const requestBody = TestDataProvider.createReqParamObject();

            sendRequestToAddIncomeItem(requestBody);
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState + requestBody.amount
                );
            });
        });
    });
});
