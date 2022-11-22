const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} = require('../../services/cashFlowManager/cashFlowManagerService');
const { TestDataProvider } = require('../../utils/testDataProvider');

describe('cashFlowManager test', () => {
    it('should return 200 status code if add cost body parameters valid', () => {
        sendRequestToAddCostItem(TestDataProvider.createReqParamObject()).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.equal(
                    CashFlowManagerObject.costAddedConfirmationMessage
                );
            }
        );
    });

    it('should return 400 status code if no amount in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('amount', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });
    it('should return 400 status code if no title in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('title', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });
    it('should return 400 status code if no comment in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('comment', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });

    it('should return 400 status code if no date in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('date', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });

    it('should return 400 status code if no category in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            TestDataProvider.customizeReqParamObject('category', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });

    it('should return 200 status code if add income body parameters valid', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.createReqParamObject()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal(
                CashFlowManagerObject.incomeAddedConfirmationMessage
            );
        });
    });

    it('should return 400 status code if no amount in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.customizeReqParamObject('amount', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });
    it('should return 400 status code if no title in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.customizeReqParamObject('title', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });
    it('should return 400 status code if no comment in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.customizeReqParamObject('comment', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });

    it('should return 400 status code if no date in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.customizeReqParamObject('date', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });

    it('should return 400 status code if no category in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem(
            TestDataProvider.customizeReqParamObject('category', undefined)
        ).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal(
                CashFlowManagerObject.addCostOrIncomeFailureMessage
            );
        });
    });
});
