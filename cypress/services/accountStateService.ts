import { hostname, accountStateEndpoint } from '../utils/endpointsProvider';

export function getCurrentAccountState() {
    return cy.request<{ accountStateValue: number }>({
        url: `${hostname}${accountStateEndpoint}`,
        method: 'GET',
    });
}
