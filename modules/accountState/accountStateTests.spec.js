const { Tests } = require('../../tests/tests.js');
const { AccountState } = require('./accountState.js');
const { changeAccountStateErrorText } = require('./errorText.js');

Tests.setModuleName('accountState Module Tests');

//let accountState = new AccountState();

Tests.verify(
    'accountState should equal ' + '0',
    0,
    new AccountState().getAccountState()
);
new AccountState().changeAccountState(15);
Tests.verify(
    'accountState should equal ' + '15',
    15,
    new AccountState().getAccountState()
);
new AccountState().changeAccountState(0);
Tests.verify(
    'accountState should equal ' + '15',
    15,
    new AccountState().getAccountState()
);
new AccountState().changeAccountState(1.5);
Tests.verify(
    'accountState should equal ' + '16.5',
    16.5,
    new AccountState().getAccountState()
);
new AccountState().changeAccountState(-1.5);
Tests.verify(
    'accountState should equal ' + '15.0',
    15.0,
    new AccountState().getAccountState()
);
Tests.verify(
    `should throw an error if no param passed to changeAccountState`,
    changeAccountStateErrorText,
    new AccountState().changeAccountState()
);

Tests.summaryTests();
