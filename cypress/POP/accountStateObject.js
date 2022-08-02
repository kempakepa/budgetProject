class AccountStateObject {
    static getAccountStateText() {
        return cy
            .get('#accountState')
            .should('not.contain', '---')
            .invoke('text');
    }
}

module.exports = { AccountStateObject };
