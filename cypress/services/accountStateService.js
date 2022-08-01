const {
    hostname,
    accountStateEndpoint,
} = require('../utils/endpointsProvider');

function getCurrentAccountState() {
    return cy.request({
        url: `${hostname}${accountStateEndpoint}`,
        method: 'GET',
    });
}

module.exports = { getCurrentAccountState };
