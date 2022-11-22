import { getCurrentAccountState } from '../../services/accountStateService';
import { CashFlowBody } from '../../services/cashFlowManager/cashFlowManagerInterface';
import {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} from '../../services/cashFlowManager/cashFlowManagerService';
import { TestDataProvider } from '../../utils/testDataProvider';

describe('accountState test', () => {
    it('should initial accountState be a number value', () => {
        getCurrentAccountState().then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.accountStateValue).to.not.undefined;
        });
    });

    it('should account state be decreased about amount', () => {
        let accountState: number;
        getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            const requestBody: CashFlowBody =
                TestDataProvider.createReqParamObject() as CashFlowBody;

            sendRequestToAddCostItem(requestBody);
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState - requestBody.amount
                );
            });
        });
    });
    it('should account state be increased about amount', () => {
        let accountState: number;
        getCurrentAccountState().then((response) => {
            accountState = response.body.accountStateValue;

            const requestBody: CashFlowBody =
                TestDataProvider.createReqParamObject() as CashFlowBody;

            sendRequestToAddIncomeItem(requestBody);
            getCurrentAccountState().then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.accountStateValue).to.equal(
                    accountState + requestBody.amount
                );
            });
        });
    });
});
