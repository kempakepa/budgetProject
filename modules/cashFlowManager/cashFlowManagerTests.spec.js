const { setModuleName, verify, summaryTests } = require("../../tests/tests.js");
const { addCost, addIncome, listAllCostAndIncome, listAllCostsAndIncomes, title, comment, date, amount, category } = require("./cashFlowManager.js");

setModuleName("cashFlowManager Tests");

const assertionTextFired = "function should be fired"
const assertionText = "should return correct data"
const assertionTextLength = "should return correct listAllCostsAndIncomes length equal = "

verify(assertionTextFired, undefined, addCost(title, comment, date, amount, category));
verify(assertionText, [[title, comment, date, amount, category]], listAllCostAndIncome());
verify(assertionTextLength + "1", 1, listAllCostsAndIncomes.length);
verify(assertionTextFired, undefined, addCost(title, comment, date, amount, category));
verify(assertionText, [[title, comment, date, amount, category], [title, comment, date, amount, category]], listAllCostAndIncome());
verify(assertionTextLength + "2", 2, listAllCostsAndIncomes.length);
verify(assertionTextFired, undefined, addCost());
verify(assertionText, [[title, comment, date, amount, category], [title, comment, date, amount, category], [undefined, undefined, undefined, undefined, undefined]], listAllCostAndIncome());
verify(assertionTextLength + "3", 3, listAllCostsAndIncomes.length);
verify(assertionTextFired, undefined, addCost(title, comment));
verify(assertionText, [[title, comment, date, amount, category], [title, comment, date, amount, category], [undefined, undefined, undefined, undefined, undefined], [title, comment, undefined, undefined, undefined]], listAllCostAndIncome());
verify(assertionTextLength + "4", 4, listAllCostsAndIncomes.length);
verify(assertionTextFired, undefined, addIncome(title, comment, date, amount, category));
verify(assertionText, [[title, comment, date, amount, category], [title, comment, date, amount, category], [undefined, undefined, undefined, undefined, undefined], [title, comment, undefined, undefined, undefined], [title, comment, date, amount, category]], listAllCostAndIncome());
verify(assertionTextLength + "5", 5, listAllCostsAndIncomes.length);
verify(assertionTextFired, undefined, addIncome(title, comment, date, amount, category));
verify(assertionText, [[title, comment, date, amount, category], [title, comment, date, amount, category], [undefined, undefined, undefined, undefined, undefined], [title, comment, undefined, undefined, undefined], [title, comment, date, amount, category], [title, comment, date, amount, category]], listAllCostAndIncome());
verify(assertionTextLength + "6", 6, listAllCostsAndIncomes.length);


summaryTests();