const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('cashFlowManagerSubcategories tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
    });

    it('should show subcategories disabled by default', () => {
        getSubcategoryList().should('be.disabled');
    });

    it('should subcategories input enable when user choose category', () => {
        //When
        CashFlowManagerObject.insertCategory('Food');

        //Then
        CashFlowManagerObject.getSubcategoryList().should('be.enabled');
        CashFlowManagerObject.insertSubcategory('Biedronka');
    });

    it('should subcategories reset when user choose another category', () => {
        //Given
        CashFlowManagerObject.insertCategory('Food');
        CashFlowManagerObject.insertSubcategory('Biedronka');

        //When
        CashFlowManagerObject.insertCategory('Salary');

        //Then
        CashFlowManagerObject.getSubcategoryList().should('have.value', null);
        CashFlowManagerObject.insertSubcategory('Job1');
    });
});
