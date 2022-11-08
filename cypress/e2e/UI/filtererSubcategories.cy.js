const { FiltererObject } = require('../../POP/filtererObject');
const { HomePageObject } = require('../../POP/homePageObject');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('filterer tests', () => {
    let randomCostData;
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
        randomCostData = TestDataProvider.customizeReqParamObject(
            'category',
            'Food'
        );
        sendRequestToAddCostItem(randomCostData);
    });

    it('should show subcategories disabled by default', () => {
        FiltererObject.getSubcategoryList().should('be.disabled');
    });

    it('should subcategories input enable when user choose category', () => {
        //When
        FiltererObject.fillCategory('Food');

        //Then
        FiltererObject.getSubcategoryList().should('be.enabled');
        FiltererObject.fillSubcategory('Biedronka');
    });

    it('should subcategories reset when user choose another category', () => {
        //Given
        FiltererObject.fillCategory('Food');
        FiltererObject.fillSubcategory('Biedronka');

        //When
        FiltererObject.fillCategory('Salary');

        //Then
        FiltererObject.getSubcategoryList().should('have.value', null);
        FiltererObject.fillSubcategory('Job1');
    });

    it('should return at least one array element by valid exact subcategory filter', () => {
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.fillSubcategory(randomCostData.subcategory);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    //to add also in filterer
    /*     it('should return no array element by invalid subcategory filter', () => {
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.fillSubcategory('Lidl');
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    }); */

    it('should return at least one array element by 3 valid filter criteria (title, category, subcategory)', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.fillSubcategory(randomCostData.subcategory);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    //to add also in filterer
    /*     it('should return no array if subcategory no match', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.fillSubcategory('Lidl');
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();

        //
    }); */
});
