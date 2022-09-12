const { FiltererObject } = require('../../POP/filtererObject');
const { HomePageObject } = require('../../POP/homePageObject');
const {
    sendRequestToAddIncomeItem,
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');
const { faker } = require('@faker-js/faker');

describe('filtererBalancer tests', () => {
    const generateCashFlowData = (
        unitCostValue,
        unitIncomeValue,
        multiple,
        specifiedComment
    ) => {
        for (let i = 0; i < multiple; i++) {
            const income = TestDataProvider.customizeReqParamObject(
                'amount',
                unitIncomeValue
            );
            income.comment = specifiedComment;

            const cost = TestDataProvider.customizeReqParamObject(
                'amount',
                unitCostValue
            );
            cost.comment = specifiedComment;

            sendRequestToAddIncomeItem(income);
            sendRequestToAddCostItem(cost);
        }
    };

    const generateSpecifiedComment = () =>
        `${faker.word.noun()}-${faker.random.numeric()}`;

    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
    });

    it('Should return balance = 0 when there is no data', () => {
        const specifiedComment = generateSpecifiedComment();

        FiltererObject.fillComment(specifiedComment);
        FiltererObject.clickSend();

        FiltererObject.incomeShouldBe(0);
        FiltererObject.costsShouldBe(0);
        FiltererObject.balanceShouldBe(0);
    });

    it('Should return positive balance when incomes are larger than costs', () => {
        const specifiedComment = generateSpecifiedComment();

        generateCashFlowData(100, 1000, 3, specifiedComment);

        FiltererObject.fillComment(specifiedComment);
        FiltererObject.clickSend();

        FiltererObject.incomeShouldBe(3000);
        FiltererObject.costsShouldBe(300);
        FiltererObject.balanceShouldBe(2700);
    });

    it('Should return negative balance when costs are larger than incomes', () => {
        const specifiedComment = generateSpecifiedComment();

        generateCashFlowData(1000, 100, 3, specifiedComment);

        FiltererObject.fillComment(specifiedComment);
        FiltererObject.clickSend();

        FiltererObject.incomeShouldBe(300);
        FiltererObject.costsShouldBe(3000);
        FiltererObject.balanceShouldBe(-2700);
    });
});
