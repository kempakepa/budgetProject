const { setModuleName, verify, summaryTests } = require('../../tests/tests.js');
const { getAccountState, changeAccountState } = require('./accountState.js');
const { changeAccountStateErrorText } = require('./errorText.js');

setModuleName('accountState Module Tests');

verify('accountState should equal ' + '0', 0, getAccountState());
changeAccountState(15);
verify('accountState should equal ' + '15', 15, getAccountState());
changeAccountState(0);
verify('accountState should equal ' + '15', 15, getAccountState());
changeAccountState(1.5);
verify('accountState should equal ' + '16.5', 16.5, getAccountState());
changeAccountState(-1.5);
verify('accountState should equal ' + '15.0', 15.0, getAccountState());
verify(
    `should throw an error if no param passed to changeAccountState`,
    changeAccountStateErrorText,
    changeAccountState()
);

summaryTests();
