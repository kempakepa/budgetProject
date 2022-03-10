const { setModuleName, verify, summaryTests } = require('../../tests/tests.js');
const { addCost, addIncome } = require('../cashFlowManager/cashFlowManager.js');
const { filterCostAndIncome } = require('./filter.js');

const title = 'title';
const comment = 'comment';
const date = 'date';
const amount = 'amount';
const category = 'category';

setModuleName('filterer Tests');

//generated test data
addIncome('wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca');
addCost('zakupy', 'luty', '2022-03-04', 201.98, 'Food');
addCost('zakupy', 'luty', '2022-03-04', 3598.02, 'Food');

verify(
    `should return 1 array if data meet filter criteria '${comment}, ${date}, ${category}'`,
    [['zakupy', 'luty', '2022-03-04', -201.98, 'Food']],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 500],
        undefined
    )
);
verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 0],
        undefined
    )
);

verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3600, 3800],
        undefined
    )
);

verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500, 3550],
        undefined
    )
);

verify(
    `should return no data if data out of filter criteria ('${amount}' edge case)`,
    [],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3500.01, 3550],
        undefined
    )
);

verify(
    `should return no data if data out of filter criteria ('${amount}')`,
    [],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [3800.01, 3550],
        undefined
    )
);

verify(
    `should return 1 array if data meet filter criteria: '${comment}, ${date}, ${amount}' edge case`,
    [['zakupy', 'luty', '2022-03-04', -201.98, 'Food']],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-02-01', '2022-03-05'],
        [0, 201.98],
        undefined
    )
);

verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [0, 3600],
        undefined
    )
);

verify(
    `should return 2 arrays if data meet filter criteria: '${comment}, ${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(
        undefined,
        'luty',
        ['2022-03-04', '2022-03-04'],
        [250, 3600],
        undefined
    )
);

verify(
    `should return 2 arrays if data meet partial filter criteria: '${title}, ${comment}, ${date}, ${amount}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(
        'zak',
        'lu',
        ['2022-03-04', '2022-03-04'],
        [200, 3598.02],
        undefined
    )
);

verify(
    `should return 2 arrays if data meet filter criteria: '${title}, ${comment}, ${date}, ${category}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(
        'zakupy',
        'luty',
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Food'
    )
);

verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        undefined
    )
);

verify(
    `should return all arrays if data meet filter criteria: 'undefined'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(undefined, undefined, undefined, undefined, undefined)
);
verify(
    `should return 3 arrays if data meet filter criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(undefined, 'luty', undefined, undefined, undefined)
);
verify(
    `should return 2 arrays if data meet filter criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome(undefined, undefined, undefined, undefined, 'Praca')
);

verify(
    `should return 3 arrays if data meet filter criteria: '${date}, ${amount}'`,
    [
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome('za', undefined, undefined, undefined, undefined)
);

verify(
    `should return 2 arrays if data meet partial filter upper case criteria: '${title}, ${comment}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome('Wy', 'Lu', undefined, undefined, undefined)
);

verify(
    `should return 3 arrays if data meet partial filter criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(undefined, 'lu', undefined, undefined, undefined)
);

verify(
    `should return 1 arrays if data meet partial filter to upper case criteria: '${title}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome('Wyna', undefined, undefined, undefined, undefined)
);

verify(
    `should return 1 arrays if data meet filter to lower case criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome(undefined, undefined, undefined, undefined, 'praca')
);
verify(
    `should return 1 arrays if data meet partial filter to lower case criteria: '${category}'`,
    [['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca']],
    filterCostAndIncome(undefined, undefined, undefined, undefined, 'pra')
);

verify(
    `should return 3 arrays if data meet filter to upper case criteria: '${comment}'`,
    [
        ['wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca'],
        ['zakupy', 'luty', '2022-03-04', -201.98, 'Food'],
        ['zakupy', 'luty', '2022-03-04', -3598.02, 'Food'],
    ],
    filterCostAndIncome(undefined, 'LUTY', undefined, undefined, undefined)
);

summaryTests();
