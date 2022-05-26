const { changeAccountStateErrorText } = require('./errorText.js');

class AccountState {
    static accountState = 0;

    getAccountState() {
        return AccountState.accountState;
    }
    changeAccountState(amount) {
        if (typeof amount == 'number') {
            AccountState.accountState = AccountState.accountState + amount;
        } else {
            return changeAccountStateErrorText;
        }
    }
}

module.exports = { AccountState };
