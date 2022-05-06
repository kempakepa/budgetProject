const { Tests } = require('../../tests/tests.js');
const { CashFlowManager } = require('../cashFlowManager/cashFlowManager.js');
const { Filterer } = require('./filterer.js');

const title = 'title';
const comment = 'comment';
const date = 'date';
const amount = 'amount';
const category = 'category';

Tests.setModuleName('filterer Tests');

//generated test data
newRecord = new CashFlowManager(
    'wynagrodzenie',
    'luty',
    '2022-03-04',
    3500,
    'Praca'
);
newRecord.addIncome();

newRecord.title = 'zakupy';
newRecord.comment = 'luty';
newRecord.date = '2022-03-04';
newRecord.amount = 201.98;
newRecord.category = 'Food';
newRecord.addCost();
newRecord.listAllCostAndIncome();

newRecord.title = 'zakupy';
newRecord.comment = 'luty';
newRecord.date = '2022-03-04';
newRecord.amount = 3598.02;
newRecord.category = 'Food';
newRecord.addCost();
newRecord.listAllCostAndIncome();

let listAllCostsAndIncomes = newRecord.listAllCostAndIncome();
console.log(listAllCostsAndIncomes);

Tests.verify(
    `should return 1 array if data meet filter criteria '${comment}, ${date}, ${category}'`,
    [['zakupy', 'luty', '2022-03-04', -201.98, 'Food']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 500],
        undefined
    ).filterCostAndIncome()
);
Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 0],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3600, 3800],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500, 3550],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}' edge case)`,
    [],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500.01, 3550],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3800.01, 3550],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}' edge case`,
    [['zakupy', 'luty', '2022-03-04', -201.98, 'Food']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 201.98],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [0, 3600],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [250, 3600],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 2 arrays if data meet partial filter criteria: '${title}, ${comment}, ${date}, ${amount}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        'zak',
        'lu',
        ['2022-03-04', '2022-03-04'],
        [200, 3598.02],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${title}, ${comment}, ${date}, ${category}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        'zakupy',
        'luty',
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Food'
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${amount}'`,
    [['zakupy', 'luty', '2022-03-04', -201.98, 'Food']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 202],
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return all arrays if data meet filter criteria: 'undefined'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);
Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);
Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'Praca'
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        'za',
        undefined,
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 2 arrays if data meet partial filter upper case criteria: '${title}, ${comment}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        'Wy',
        'Lu',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 3 arrays if data meet partial filter criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'lu',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 1 arrays if data meet partial filter to upper case criteria: '${title}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        'Wyna',
        undefined,
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);

verify(
    `should return 1 arrays if data meet filter to lower case criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'praca'
    ).filterCostAndIncome()
);
Tests.verify(
    `should return 1 arrays if data meet partial filter to lower case criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'pra'
    ).filterCostAndIncome()
);

Tests.verify(
    `should return 3 arrays if data meet filter to upper case criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'LUTY',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);

Tests.summaryTests();
