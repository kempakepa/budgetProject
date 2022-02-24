const { setModuleName, verify, summaryTests } = require("../../tests/tests.js");
const { getAccountState, changeAccountState } = require("./accountState.js");

setModuleName("AccountState Module Tests");

const { getAccountState, changeAccountState } = require("./accountState.js");
verify("Check if accountState = 0", 0, getAccountState());
changeAccountState(15);
verify("Check if accountState = 15", 15, getAccountState());
changeAccountState(0);
verify("Check if accountState = 15", 15, getAccountState());
changeAccountState(1.5);
verify("Check if accountState = 16.5", 16.5, getAccountState());
verify("Check if error thrown", "throw error", changeAccountState(undefined));


summaryTests();




