const {
    hostname,
    editCashFlowEndpoint,
} = require('../utils/endpointsProvider');

const sendCashFlowEditorPut = (body) => {
    return cy.request({
        url: `${hostname}${editCashFlowEndpoint}`,
        method: 'PUT',
        body,
        failOnStatusCode: false,
    });
};

module.exports = { sendCashFlowEditorPut };
