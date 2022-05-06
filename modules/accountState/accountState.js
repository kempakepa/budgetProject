const { changeAccountStateErrorText } = require('./errorText.js');

class AccountState {
    accountState = 0;

    getAccountState() {
        return this.accountState.toFixed(2);
    }
    changeAccountState(amount) {
        if (typeof amount == 'number') {
            this.accountState = this.accountState + amount;
        } else {
            return changeAccountStateErrorText;
        }
    }
}

module.exports = { AccountState };
