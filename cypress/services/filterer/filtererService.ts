import {
    hostname,
    filterBudgetItemEndpoint,
} from '../../utils/endpointsProvider';
import { Fiterer } from './filtererInterface';

export function defineQuerryParams(param: Fiterer) {
    let querryParams = `title=${param.title}&comment=${param.comment}&date=${param.date}&amount=${param.amount}&category=${param.category}&subcategory=${param.subcategory}`;
    return querryParams;
}

export function filterResults(body: Fiterer) {
    return cy.request({
        url: `${hostname}${filterBudgetItemEndpoint}${defineQuerryParams(
            body
        )}`,
        method: 'GET',
    });
}
