const { Tests } = require('../../tests/tests.js');
const { CashFlowManager } = require('./cashFlowManager.js');

Tests.setModuleName('cashFlowManager Tests');

let cashFlowManager = new CashFlowManager(
    'zakupy',
    'lidl',
    '2022-02-01',
    22.22,
    'Food'
);

Tests.verify(
    `function addCost should be fired`,
    undefined,
    cashFlowManager.addCost()
);
Tests.verify(
    `should display addCost input data in array with -amount`,
    [['zakupy', 'lidl', '2022-02-01', -22.22, 'Food']],
    cashFlowManager.listAllCostAndIncome()
);
Tests.verify(
    `function addCost should be fired`,
    undefined,
    cashFlowManager.addCost()
);
Tests.verify(
    `should display 2 addCost input data in array with -amount`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    cashFlowManager.listAllCostAndIncome()
);

cashFlowManager.date = undefined;
cashFlowManager.amount = undefined;
cashFlowManager.category = undefined;

Tests.verify(
    `function addCost should be fired`,
    undefined,
    cashFlowManager.addCost()
);
Tests.verify(
    `should display not changed 2 addCost input data in array`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    cashFlowManager.listAllCostAndIncome()
);

cashFlowManager.title = 'wynagrodzenie';
cashFlowManager.comment = 'luty';
cashFlowManager.date = '2022-02-01';
cashFlowManager.amount = 3500;
cashFlowManager.category = 'Praca';

Tests.verify(
    `function addCost should be fired`,
    undefined,
    cashFlowManager.addIncome(
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
    cashFlowManager.listAllCostAndIncome()
);

cashFlowManager.title = 'stypendium';
cashFlowManager.comment = 'luty';
cashFlowManager.date = '2022-02-01';
cashFlowManager.amount = 100;
cashFlowManager.category = 'Studia';

Tests.verify(
    `function addCost should be fired`,
    undefined,
    cashFlowManager.addIncome('stypendium', 'luty', '2022-02-01', 100, 'Studia')
);
Tests.verify(
    `should display 4 element array with 2 not changed addCost and 2 addIncome input data`,
    [
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        ['wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
        ['stypendium', 'luty', '2022-02-01', 100, 'Studia'],
    ],
    cashFlowManager.listAllCostAndIncome()
);
Tests.summaryTests();
