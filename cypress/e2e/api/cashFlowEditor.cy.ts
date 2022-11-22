import { TestDataProvider } from '../../utils/testDataProvider';
import { sendRequestToAddCostItem } from '../../services/cashFlowManager/cashFlowManagerService';
import { filterResults } from '../../services/filterer/filtererService';
import { sendCashFlowEditorPut } from '../../services/cashFlowEditorService';
import { CashFlowBody } from '../../services/cashFlowManager/cashFlowManagerInterface';

describe('cashFlowEditor test', () => {
    let requestBody: CashFlowBody;
    beforeEach(() => {
        requestBody = TestDataProvider.createReqParamObject() as CashFlowBody;
        sendRequestToAddCostItem(requestBody);
    });
    it('should return 200 status code if edit cost or income valid', () => {
        //Given
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
