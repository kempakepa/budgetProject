const { TestDataProvider } = require('../../utils/testDataProvider');
const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const { filterResults } = require('../../services/filtererService');
const {
    sendCashFlowEditorPut,
} = require('../../services/cashFlowEditorService');

describe('cashFlowEditor test', () => {
    it('should return 200 status code if edit cost or income valid', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        filterResults({}).then((response) => {
            const addedItemId = response.body.find(
                (cashItem) => cashItem[1] === requestBody.title
            )[0];

            //When
            sendCashFlowEditorPut({
                amount: requestBody.amount,
                cashFlowType: 'COST',
                category: requestBody.category,
                comment: requestBody.comment,
                date: new Date(requestBody.date),
                title: requestBody.title,
                id: addedItemId,
            }).then((response) => {
                //Then
                expect(response.status).to.equal(200);
            });
        });
    });

    it('should return 404 status code if cost or income not exist', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();

        //When
        sendCashFlowEditorPut({
            amount: requestBody.amount,
            cashFlowType: 'COST',
            category: requestBody.category,
            comment: requestBody.comment,
            date: new Date(requestBody.date),
            title: requestBody.title,
            id: 453453,
        }).then((response) => {
            //Then
            expect(response.status).to.equal(404);
        });
    });

    it('should return 400 status code if cost or income ammount = 0', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        filterResults({}).then((response) => {
            const addedItemId = response.body.find(
                (cashItem) => cashItem[1] === requestBody.title
            )[0];

            //When
            sendCashFlowEditorPut({
                amount: 0,
                cashFlowType: 'COST',
                category: requestBody.category,
                comment: requestBody.comment,
                date: new Date(requestBody.date),
                title: requestBody.title,
                id: addedItemId,
            }).then((response) => {
                //Then
                expect(response.status).to.equal(400);
            });
        });
    });

    it('should return 400 status code if cost or income ammount < 0', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        filterResults({}).then((response) => {
            const addedItemId = response.body.find(
                (cashItem) => cashItem[1] === requestBody.title
            )[0];

            //When
            sendCashFlowEditorPut({
                amount: -500,
                cashFlowType: 'COST',
                category: requestBody.category,
                comment: requestBody.comment,
                date: new Date(requestBody.date),
                title: requestBody.title,
                id: addedItemId,
            }).then((response) => {
                //Then
                expect(response.status).to.equal(400);
            });
        });
    });

    it('should return 400 status code if cost or income containt empty title', () => {
        //Given
        const requestBody = TestDataProvider.createReqParamObject();
        sendRequestToAddCostItem(requestBody);

        filterResults({}).then((response) => {
            const addedItemId = response.body.find(
                (cashItem) => cashItem[1] === requestBody.title
            )[0];

            //When
            sendCashFlowEditorPut({
                amount: requestBody.amount,
                cashFlowType: 'COST',
                category: requestBody.category,
                comment: requestBody.comment,
                date: new Date(requestBody.date),
                title: '',
                id: addedItemId,
            }).then((response) => {
                //Then
                expect(response.status).to.equal(400);
            });
        });
    });
});
