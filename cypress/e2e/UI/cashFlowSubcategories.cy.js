const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('cashFlowManagerSubcategories tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
    });

    it('should show subcategories disabled by default', () => {
        cy.get('#subcategories').should('be.disabled');
    });
});
