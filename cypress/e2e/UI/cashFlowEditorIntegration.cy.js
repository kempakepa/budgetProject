const { HomePageObject } = require('../../POP/homePageObject');
const { FiltererObject } = require('../../POP/filtererObject');
const { TestDataProvider } = require('../../utils/testDataProvider');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManager/cashFlowManagerService');
const {
    getCurrentAccountState,
} = require('../../services/accountStateService');
const { filterResults } = require('../../services/filterer/filtererService');
const {
    sendCashFlowEditorPut,
} = require('../../services/cashFlowEditorService');

describe('cashflow editor integration tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
    });

    it('balance should be equal account state', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

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

            FiltererObject.clickSend();

            let accountState = getCurrentAccountState().then((response) => {
                accountState = response.body.accountStateValue;
                FiltererObject.balanceShouldBe(accountState);
            });
        });
    });

    it('incomes should be equal positive amount', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

        filterResults({}).then((response) => {
            const addedItemId = response.body.find(
                (cashItem) => cashItem[1] === costData.title
            )[0];

            const newIncomeData = TestDataProvider.createReqParamObject();
            sendCashFlowEditorPut({
                amount: newIncomeData.amount,
                cashFlowType: 'INCOME',
                category: newIncomeData.category,
                comment: newIncomeData.comment,
                date: new Date(newIncomeData.date),
                title: newIncomeData.title,
                id: addedItemId,
            });

            FiltererObject.fillTitle(newIncomeData.title);
            FiltererObject.clickSend();
            FiltererObject.incomeShouldBe(newIncomeData.amount);
        });
    });

    it('costs should be equal negative amount', () => {
        const costData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(costData);

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

            FiltererObject.fillTitle(newCostData.title);
            FiltererObject.clickSend();
            FiltererObject.costsShouldBe(newCostData.amount);
        });
    });
});
