const { setModuleName, verify, summaryTests } = require("../../tests/tests.js");
const { getAccountState, changeAccountState } = require("./accountState.js");
const { changeAccountStateErrorText } = require("./errorText.js");

const assertionText = "accountState should equal "
const assertionErrorText = "should throw an error"

setModuleName("accountState Module Tests");

verify(assertionText + '0', 0, getAccountState());
changeAccountState(15);
verify(assertionText + '15', 15, getAccountState());
changeAccountState(0);
verify(assertionText + '15', 15, getAccountState());
changeAccountState(1.5);
verify(assertionText + '16.5', 16.5, getAccountState());
verify(assertionErrorText, changeAccountStateErrorText, changeAccountState());
changeAccountState(-1.5);
verify(assertionText + '15.0', 15.0, getAccountState());
changeAccountState();
verify(assertionText + '15.0', 15.0, getAccountState());

summaryTests();




