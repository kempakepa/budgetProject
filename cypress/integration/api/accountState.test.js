const { getCurrentAccountState } = require('../services/accountStateService');
const {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} = require('../services/cashFlowManagerService');

describe('accountState test', () => {
    it('should initial accountState be a number value', () => {
        getCurrentAccountState().then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.accountStateValue).to.not.undefined;
        });
    });

    it('should account state be decreased about 100', () => {
        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;
            sendRequestToAddCostItem({
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 100,
                category: 'Food',
            });
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState - 100
                );
            });
        });
    });
    it('should account state be increased about 1500', () => {
        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;
            cy.log(accountState);
            sendRequestToAddIncomeItem({
                title: 'work',
                comment: '',
                date: '2022-02-01',
                amount: 1500,
                category: 'Food',
            });
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState + 1500
                );
            });
        });
    });
});
