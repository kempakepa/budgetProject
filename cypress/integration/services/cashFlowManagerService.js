const {
    addCostItemMetaProvider,
    addIncomeItemMetaProvider,
} = require('./requestMetaProvider');

function sendRequestToAddCostItem(body, failOnStatusCode) {
    return cy.request(addCostItemMetaProvider(body, failOnStatusCode));
}

function sendRequestToAddIncomeItem(body, failOnStatusCode) {
    return cy.request(addIncomeItemMetaProvider(body, failOnStatusCode));
}

module.exports = { sendRequestToAddCostItem, sendRequestToAddIncomeItem };
