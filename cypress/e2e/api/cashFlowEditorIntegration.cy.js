const { TestDataProvider } = require('../../utils/testDataProvider');
const {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} = require('../../services/cashFlowManager/cashFlowManagerService');
const {
    getCurrentAccountState,
} = require('../../services/accountStateService');
const { filterResults } = require('../../services/filterer/filtererService');
const {
    sendCashFlowEditorPut,
} = require('../../services/cashFlowEditorService');

describe('cashflow editor integration tests', () => {
    it('account state should be recalculated if amount changed', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            filterResults({}).then((response) => {
                const addedItemId = response.body.find(
                    (cashItem) => cashItem[1] === costData.title
                )[0];

                const newCostData = TestDataProvider.createReqParamObject();
                sendCashFlowEditorPut({
                    amount: newCostData.amount,
                    cashFlowType: 'COST',
                    category: newCostData.category,
                    comment: newCostData.comment,
                    date: new Date(newCostData.date),
                    title: newCostData.title,
                    id: addedItemId,
                });

                getCurrentAccountState().then((response) => {
                    expect(response.body.accountStateValue).to.equal(
                        accountState + (costData.amount - newCostData.amount)
                    );
                });
            });
        });
    });

    it('account state should be recalculated if cashFlowType and amount changed', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            filterResults({}).then((response) => {
                const addedItemId = response.body.find(
                    (cashItem) => cashItem[1] === costData.title
                )[0];

                const newCostData = TestDataProvider.createReqParamObject();
                sendCashFlowEditorPut({
                    amount: newCostData.amount,
                    cashFlowType: 'INCOME',
                    category: newCostData.category,
                    comment: newCostData.comment,
                    date: new Date(newCostData.date),
                    title: newCostData.title,
                    id: addedItemId,
                });

                getCurrentAccountState().then((response) => {
                    expect(response.body.accountStateValue).to.equal(
                        accountState + (newCostData.amount + costData.amount)
                    );
                });
            });
        });
    });

    it('filterer should return positive amount number if cashFlowType changed to INCOME', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            filterResults({}).then((response) => {
                const addedItemId = response.body.find(
                    (cashItem) => cashItem[1] === costData.title
                )[0];

                const newCostData = TestDataProvider.createReqParamObject();
                sendCashFlowEditorPut({
                    amount: newCostData.amount,
                    cashFlowType: 'INCOME',
                    category: newCostData.category,
                    comment: newCostData.comment,
                    date: new Date(newCostData.date),
                    title: newCostData.title,
                    id: addedItemId,
                });

                filterResults({ title: newCostData.title }).then((response) => {
                    expect(response.body[0][4]).to.equal(newCostData.amount);
                    expect(response.body[0][4]).to.be.a('number');
                });
            });
        });
    });

    it('filterer should return negative amount number if cashFlowType changed to COST', () => {
        const incomeData = TestDataProvider.createReqParamObject();
        sendRequestToAddIncomeItem(incomeData);

        let accountState = getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            filterResults({}).then((response) => {
                const addedItemId = response.body.find(
                    (cashItem) => cashItem[1] === incomeData.title
                )[0];

                const newCostData = TestDataProvider.createReqParamObject();
                sendCashFlowEditorPut({
                    amount: incomeData.amount,
                    cashFlowType: 'COST',
                    category: newCostData.category,
                    comment: newCostData.comment,
                    date: new Date(newCostData.date),
                    title: newCostData.title,
                    id: addedItemId,
                });

                filterResults({ title: newCostData.title }).then((response) => {
                    expect(response.body[0][4]).to.equal(-incomeData.amount);
                    expect(response.body[0][4]).to.be.a('number');
                });
            });
        });
    });
});
