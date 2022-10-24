const { Tests } = require('../../../../tests/tests.js');
const { CashFlowManager } = require('./cashFlowManager.js');

Tests.setModuleName('cashFlowManager Tests');

Tests.verify(
    `1 function addCost should be fired`,
    'Cost added successfully',
    new CashFlowManager().addCost('zakupy', 'lidl', '2022-02-01', 22.22, 'Food')
);
Tests.verify(
    `should display addCost input data in array with -amount`,
    [['zakupy', 'lidl', '2022-02-01', -22.22, 'Food']],
    new CashFlowManager().listAllCostAndIncome()
);
Tests.verify(
    `2 function addCost should be fired`,
    'Cost added successfully',
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
    `3 function addCost should be fired`,
    `Invalid input`,
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
    `4 function addIncome should be fired`,
    'Income added successfully',
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
    `5 function addIncome should be fired`,
    'Income added successfully',
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

Tests.verify(
    `6 function addCost should not be fired`,
    `Invalid input`,
    new CashFlowManager().addCost('stypendium', 'luty', '2022-02-01', 'Studia')
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

Tests.verify(
    `7 function addCost should not be fired`,
    `Invalid input`,
    new CashFlowManager().addCost(
        'stypendium',
        'luty',
        '20222-02-01',
        12,
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

Tests.verify(
    `8 function addCost should not be fired`,
    `Invalid input`,
    new CashFlowManager().addCost(
        undefined,
        'luty',
        '20222-02-01',
        12,
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

Tests.verify(
    `9 function addCost should not be fired`,
    `Invalid input`,
    new CashFlowManager().addIncome(
        undefined,
        'luty',
        '20222-02-01',
        12,
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
