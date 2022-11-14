const { HomePageObject } = require('../../POP/homePageObject');
const { FiltererObject } = require('../../POP/filtererObject');
const { CashFlowEditorObject } = require('../../POP/cashFlowEditorObject');
const { TestDataProvider } = require('../../utils/testDataProvider');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');

describe('cashFlowEditor tests', () => {
    beforeEach(() => {
        HomePageObject.visitHomePage();
        HomePageObject.goToFiltererModule();
    });

    it('should edit option should be visible and enable next to every in filterer list', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        //When
        FiltererObject.clickSend();

        //Then
        FiltererObject.rowContainEditButton(
            FiltererObject.getRow(requestBody.title)
        );
    });

    it('should edit form be filled by saved values', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        FiltererObject.clickSend();

        //When
        FiltererObject.clickEditButton(requestBody.title);

        //Then
        CashFlowEditorObject.titleShouldHaveValue(requestBody.title);
        CashFlowEditorObject.commentShouldHaveValue(requestBody.comment);
        CashFlowEditorObject.dateShouldHaveValue(requestBody.date);
        CashFlowEditorObject.amountShouldHaveValue(requestBody.amount);
        CashFlowEditorObject.categoryShouldHaveValue(
            requestBody.category.toLowerCase()
        );
        CashFlowEditorObject.costRadioButtonShouldBeChecked();
    });

    it('should be possible to edit cost or income value', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);
        FiltererObject.clickSend();
        FiltererObject.clickEditButton(requestBody.title);

        //When
        const newCostData = TestDataProvider.createReqParamObject();
        CashFlowEditorObject.typeTitle(newCostData.title);
        CashFlowEditorObject.typeComment(newCostData.comment);
        CashFlowEditorObject.typeDate(newCostData.date);
        CashFlowEditorObject.typeAmount(newCostData.amount);
        CashFlowEditorObject.selectCategory(newCostData.category);
        CashFlowEditorObject.clickIncomeButton();
        CashFlowEditorObject.clickUpdateButton();

        //Then
        FiltererObject.clickSend();
        const cashItemRow = FiltererObject.getRow(newCostData.title);
        FiltererObject.rowContainText(cashItemRow, newCostData.comment);
        FiltererObject.rowContainText(cashItemRow, newCostData.date);
        FiltererObject.rowContainText(cashItemRow, newCostData.amount);
        FiltererObject.rowContainText(
            cashItemRow,
            newCostData.category.toLowerCase()
        );
    });
});
