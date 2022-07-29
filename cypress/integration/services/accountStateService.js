const { accountStateMetaProvider } = require('./requestMetaProvider');

function getCurrentAccountState() {
    return cy.request(accountStateMetaProvider());
}

module.exports = { getCurrentAccountState };
