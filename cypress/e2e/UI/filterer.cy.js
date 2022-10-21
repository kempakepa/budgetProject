const { FiltererObject } = require('../../POP/filtererObject');
const { HomePageObject } = require('../../POP/homePageObject');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('filterer tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('category', 'Food')
        );
    });

    it('should return items if no filter parameter set', () => {
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact title filter', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['title'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact comment filter', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['comment'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid date range filter', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['date'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid amount range filter', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['amount'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact category filter', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['category'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid title uppercased filter', () => {
        TestDataProvider.setCustomFilterParamObject(['title'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid comment uppercased filter', () => {
        TestDataProvider.setCustomFilterParamObject(['comment'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid category uppercased filter', () => {
        TestDataProvider.setCustomFilterParamObject(['category'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment)', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'comment'],
                'UI'
            )
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, date)', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(['title', 'date'], 'UI')
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, amount)', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'amount'],
                'UI'
            )
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, category)', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(
                ['title', 'category'],
                'UI'
            )
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (date, amount)', () => {
        FiltererObject.fillFiltererForm(
            TestDataProvider.setCustomFilterParamObject(
                ['date', 'amount'],
                'UI'
            )
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        TestDataProvider.setCustomFilterParamObject(['title', 'comment'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        TestDataProvider.setCustomFilterParamObject(['title', 'date'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        TestDataProvider.setCustomFilterParamObject(['title', 'amount'], 'UI');
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        TestDataProvider.setCustomFilterParamObject(
            ['title', 'category'],
            'UI'
        );
        FiltererObject.fillFiltererForm(
            TestDataProvider.modifyFilterParamObjectToUpperCase()
        );
        FiltererObject.shouldFilterAtLeastOneItem();
    });
});
