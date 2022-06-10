const { changeAccountStateErrorText } = require('./errorText.js');

class AccountState {
    static accountState = 0;

    static getAccountState() {
        return AccountState.accountState;
    }
    static changeAccountState(amount) {
        if (typeof amount == 'number') {
            AccountState.accountState = AccountState.accountState + amount;
        } else {
            return changeAccountStateErrorText;
        }
    }
}

module.exports = { AccountState };
