const { changeAccountStateErrorText } = require('./errorText.js');

let accountState = 0;

function getAccountState() {
    return accountState;
}
function changeAccountState(amount) {
    if (typeof amount == 'number') {
        accountState = accountState + amount;
    } else {
        return changeAccountStateErrorText;
    }
}

module.exports = { getAccountState, changeAccountState };
