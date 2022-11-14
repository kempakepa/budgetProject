const {
    hostname,
    editCashFlowEndpoint,
} = require('../utils/endpointsProvider');

const sendCashFlowEditorPost = (body) => {
    return cy.request({
        url: `${hostname}${editCashFlowEndpoint}`,
        method: 'POST',
        body,
        failOnStatusCode: false,
    });
};

module.exports = { sendCashFlowEditorPut: sendCashFlowEditorPost };
