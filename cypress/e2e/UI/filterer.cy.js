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
        randomCostData = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(randomCostData);
    });

    it('should return items if no filter parameter set', () => {
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact title filter', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact comment filter', () => {
        FiltererObject.fillComment(randomCostData.comment);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid date range filter', () => {
        FiltererObject.fillMinDate(randomCostData.date);
        FiltererObject.fillMaxDate(randomCostData.date);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid amount range filter', () => {
        FiltererObject.fillMinAmount(randomCostData.amount);
        FiltererObject.fillMaxAmount(randomCostData.amount);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid exact category filter', () => {
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid title uppercased filter', () => {
        FiltererObject.fillTitle(randomCostData.title.toUpperCase());
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by valid comment uppercased filter', () => {
        FiltererObject.fillComment(randomCostData.comment.toUpperCase());
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment)', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillComment(randomCostData.comment);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, mindate)', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillMinDate(randomCostData.date);
        FiltererObject.fillMaxDate(randomCostData.date);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, minamount)', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillMinAmount(randomCostData.amount);
        FiltererObject.fillMaxAmount(randomCostData.amount);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, category)', () => {
        FiltererObject.fillTitle(randomCostData.title);
        FiltererObject.fillCategory(randomCostData.category);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (date, amount)', () => {
        FiltererObject.fillMinDate(randomCostData.date);
        FiltererObject.fillMinAmount(randomCostData.amount);
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        FiltererObject.fillTitle(randomCostData.title.toUpperCase());
        FiltererObject.fillComment(randomCostData.comment.toUpperCase());
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });

    it('should return at least one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        FiltererObject.fillTitle(randomCostData.title.toUpperCase());
        FiltererObject.fillMinDate(randomCostData.date.toUpperCase());
        FiltererObject.clickSend();
        FiltererObject.shouldFilterAtLeastOneItem();
    });
});
