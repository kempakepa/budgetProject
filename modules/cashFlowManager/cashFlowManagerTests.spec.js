const { Tests } = require('../../tests/tests.js');
const { CashFlowManager } = require('./cashFlowManager.js');

Tests.setModuleName('cashFlowManager Tests');

Tests.verify(
    `function addCost should be fired`,
    undefined,
    new CashFlowManager().addCost('zakupy', 'lidl', '2022-02-01', 22.22, 'Food')
);
Tests.verify(
    `should display addCost input data in array with -amount`,
    [['zakupy', 'lidl', '2022-02-01', -22.22, 'Food']],
    new CashFlowManager().listAllCostAndIncome()
);
Tests.verify(
    `function addCost should be fired`,
    undefined,
    new CashFlowManager().addCost('zakupy', 'lidl', '2022-02-01', 22.22, 'Food')
);
Tests.verify(
    `should display 2 addCost input data in array with -amount`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

Tests.verify(
    `function addCost should be fired`,
    undefined,
    new CashFlowManager().addCost(
        'zakupy',
        'lidl',
        undefined,
        undefined,
        undefined
    )
);
Tests.verify(
    `should display not changed 2 addCost input data in array`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

Tests.verify(
    `function addCost should be fired`,
    undefined,
    new CashFlowManager().addIncome(
        'wynagrodzenie',
        'luty',
        '2022-02-01',
        3500,
        'Praca'
    )
);

Tests.verify(
    `should display 3 element array with 2 not changed addCost and 1 addIncome input data`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

Tests.verify(
    `function addCost should be fired`,
    undefined,
    new CashFlowManager().addIncome(
        'stypendium',
        'luty',
        '2022-02-01',
        100,
        'Studia'
    )
);
Tests.verify(
    `should display 4 element array with 2 not changed addCost and 2 addIncome input data`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
        ['stypendium', 'luty', '2022-02-01', 100, 'Studia'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);
Tests.summaryTests();
