const { Tests } = require('../../../../tests/tests.js');
const { CashFlowManager } = require('../cashFlowManager/cashFlowManager.js');
const { Filterer } = require('./filterer.js');

const title = 'title';
const comment = 'comment';
const date = 'date';
const amount = 'amount';
const category = 'category';

Tests.setModuleName('filterer Tests');

//generated test data
new CashFlowManager().addIncome({
    title: 'wynagrodzenie',
    comment: 'luty',
    date: '2022-03-04',
    amount: 3500,
    category: 'Praca',
    subcategory: 'Praca1',
});

new CashFlowManager().addCost({
    title: 'zakupy',
    comment: 'luty',
    date: '2022-03-04',
    amount: 201.98,
    category: 'Food',
    subcategory: 'Auchan',
});
new CashFlowManager().addCost({
    title: 'zakupy',
    comment: 'luty',
    date: '2022-03-04',
    amount: 3598.02,
    category: 'Food',
    subcategory: '',
});

Tests.verify(
    `should return 1 array if data meet filter criteria '${comment}, ${date}, ${category}'`,
    [[2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 500],
        undefined,
        undefined
    )
);
Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 0],
        undefined,
        ''
    )
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3600, 3800],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [[1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500, 3550],
        undefined,
        ''
    )
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}' edge case)`,
    [],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500.01, 3550],
        undefined,
        ''
    )
);

Tests.verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3800.01, 3550],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}' edge case`,
    [[2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 201.98],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [0, 3600],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [250, 3600],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 2 arrays if data meet partial filter criteria: '${title}, ${comment}, ${date}, ${amount}'`,
    [
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'zak',
        'lu',
        ['2022-03-04', '2022-03-04'],
        [200, 3598.02],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 1 array if data meet partial filter criteria: '${title}, ${comment}, ${date}, ${amount}'`,
    [[3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', '']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'zak',
        'lu',
        ['2022-03-04', '2022-03-04'],
        [3598.02, 3598.02],
        undefined,
        ''
    )
);

Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${title}, ${comment}, ${date}, ${category}'`,
    [
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'zakupy',
        'luty',
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Food',
        ''
    )
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        undefined,
        ''
    )
);

Tests.verify(
    `should return 1 array if data meet filter criteria: '${amount}'`,
    [[2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 202],
        undefined,
        ''
    )
);

Tests.verify(
    `should return all arrays if data meet filter criteria: 'undefined'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        ''
    )
);
Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${comment}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        undefined,
        undefined,
        undefined,
        ''
    )
);
Tests.verify(
    `should return 2 arrays if data meet filter criteria: '${category}'`,
    [[3, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'Praca',
        ''
    )
);

Tests.verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'za',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 2 arrays if data meet partial filter upper case criteria: '${title}, ${comment}'`,
    [[3, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'Wy',
        'Lu',
        undefined,
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 3 arrays if data meet partial filter criteria: '${comment}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'lu',
        undefined,
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 1 arrays if data meet partial filter to upper case criteria: '${title}'`,
    [[1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'Wyna',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 1 arrays if data meet filter to lower case criteria: '${category}'`,
    [[1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'praca',
        undefined
    )
);
Tests.verify(
    `should return 1 arrays if data meet partial filter to lower case criteria: '${category}'`,
    [[1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        undefined,
        'pra',
        undefined
    )
);

Tests.verify(
    `should return 3 arrays if data meet filter to upper case criteria: '${comment}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'LUTY',
        undefined,
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 3 arrays if data meet filter min = max date range criteria: '${comment}'`,
    [
        [1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1'],
        [2, 'zakupy', 'luty', '2022-03-04', -201.98, 'Food', 'Auchan'],
        [3, 'zakupy', 'luty', '2022-03-04', -3598.02, 'Food', ''],
    ],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        undefined,
        undefined
    )
);

Tests.verify(
    `should return 1 arrays if data meet filter min = max amount range criteria: '${comment}'`,
    [[1, 'wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca', 'Praca1']],
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [3500, 3500],
        undefined,
        undefined
    )
);

Tests.summaryTests();
