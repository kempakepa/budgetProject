const { setModuleName, verify, summaryTests } = require("../../tests/tests.js");
const { getAccountState, changeAccountState } = require("./accountState.js");
const { changeAccountStateErrorText } = require("./errorText.js");

setModuleName("AccountState Module Tests");

verify("Check if accountState = 0", 0, getAccountState());
changeAccountState(15);
verify("Check if accountState = 15", 15, getAccountState());
changeAccountState(0);
verify("Check if accountState = 15", 15, getAccountState());
changeAccountState(1.5);
verify("Check if accountState = 16.5", 16.5, getAccountState());
verify("Check if error thrown", changeAccountStateErrorText, changeAccountState(undefined));
changeAccountState(-1.5);
verify("Check if accountState = 15.0", 15.0, getAccountState());
changeAccountState();
verify("Check if accountState = 15.0", 15.0, getAccountState());

summaryTests();




