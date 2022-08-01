const { hostname, accountStateEndpoint } = require('../utils/urlProvider');

function getCurrentAccountState() {
    return cy.request({
        url: `${hostname}${accountStateEndpoint}`,
        method: 'GET',
    });
}

module.exports = { getCurrentAccountState };
