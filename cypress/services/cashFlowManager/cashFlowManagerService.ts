import {
    addCostItemEndpoint,
    hostname,
    addIncomeItemEndpoint,
} from '../../utils/endpointsProvider';
import { CashFlowBody } from './cashFlowManagerInterface';

export function sendRequestToAddCostItem(body: CashFlowBody) {
    return cy.request({
        url: `${hostname}${addCostItemEndpoint}`,
        method: 'POST',
        body: body,
        failOnStatusCode: false,
    });
}

export function sendRequestToAddIncomeItem(body: CashFlowBody) {
    return cy.request({
        url: `${hostname}${addIncomeItemEndpoint}`,
        method: 'POST',
        body: body,
        failOnStatusCode: false,
    });
}
