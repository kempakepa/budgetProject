const { setModuleName, verify, summaryTests } = require('../../tests/tests.js');
const {
    addCost,
    addIncome,
    listAllCostAndIncome,
} = require('./cashFlowManager.js');

setModuleName('cashFlowManager Tests');

verify(
    `function addCost should be fired`,
    undefined,
    addCost('zakupy', 'lidl', '2022-02-01', 22.22, 'Food')
);
verify(
    `should display addCost input data in array with -amount`,
    [['zakupy', 'lidl', '2022-02-01', -22.22, 'Food']],
    listAllCostAndIncome()
);

verify(
    `function addCost should be fired`,
    undefined,
    addCost('zakupy', 'lidl', '2022-02-01', 22.22, 'Food')
);
verify(
    `should display 2 addCost input data in array with -amount`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    listAllCostAndIncome()
);
verify(
    `function addCost should be fired`,
    undefined,
    addCost('title', 'comment')
);
verify(
    `should display not changed 2 addCost input data in array`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    listAllCostAndIncome()
);
verify(
    `function addCost should be fired`,
    undefined,
    addIncome('wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca')
);
verify(
    `should display 3 element array with 2 not changed addCost and 1 addIncome input data`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
    ],
    listAllCostAndIncome()
);
verify(
    `function addCost should be fired`,
    undefined,
    addIncome('stypendium', 'luty', '2022-02-01', 100, 'Studia')
);
verify(
    `should display 4 element array with 2 not changed addCost and 2 addIncome input data`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
        ['stypendium', 'luty', '2022-02-01', 100, 'Studia'],
    ],
    listAllCostAndIncome()
);

summaryTests();
