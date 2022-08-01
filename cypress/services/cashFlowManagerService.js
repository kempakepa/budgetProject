const {
    addCostItemEndpoint,
    hostname,
    addIncomeItemEndpoint,
} = require('../utils/endpointsProvider');

function sendRequestToAddCostItem(body) {
    return cy.request({
        url: `${hostname}${addCostItemEndpoint}`,
        method: 'POST',
        body: body,
        failOnStatusCode: false,
    });
}

function sendRequestToAddIncomeItem(body) {
    return cy.request({
        url: `${hostname}${addIncomeItemEndpoint}`,
        method: 'POST',
        body: body,
        failOnStatusCode: false,
    });
}

module.exports = { sendRequestToAddCostItem, sendRequestToAddIncomeItem };
