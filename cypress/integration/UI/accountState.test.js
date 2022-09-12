const { AccountStateObject } = require('../../POP/accountStateObject');
const { HomePageObject } = require('../../POP/homePageObject');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('accountState test', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToAccountStateModule();
    });
    it('should initial accountState be a number value', () => {
        AccountStateObject.getAccountStateText()
            .then(parseInt)
            .then(cy.log)
            .should('be.a', 'number');
    });
    it('should account state be decreased about addCost amount', () => {
        AccountStateObject.getAccountStateText().then((accountStateText) => {
            cy.log(accountStateText);
            let accountState = parseInt(accountStateText);

            const requestBody = TestDataProvider.createReqParamObject();

            sendRequestToAddCostItem(requestBody);
            cy.reload();
            cy.get('#accountState').should(
                'contain',
                `${accountState - requestBody.amount}`
            );
        });
    });
});
