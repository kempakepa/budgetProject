const { setModuleName, verify, summaryTests } = require("../../tests/tests.js");
const { addCost, addIncome, listAllcostAndIncome } = require("./cashFlowManager.js");

setModuleName("cashFlowManager Tests");


verify("data input = data output", [title, comment, date, amount, category], listAllcostAndIncome());
verify("data input = data output", [], listAllcostAndIncome());


summaryTests();