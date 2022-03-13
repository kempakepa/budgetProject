const { getAccountState } = require('./modules/accountState/accountState');
const {
    addIncome,
    listAllCostAndIncome,
    addCost,
} = require('./modules/cashFlowManager/cashFlowManager');
const { filterCostAndIncome } = require('./modules/filterer/filterer');

addIncome('wynagrodzenie', 'luty', '2022-03-04', 3500, 'Praca');
console.log(
    'Current account state = ',
    getAccountState() + '\n',
    'List of costs and incomes: ',
    listAllCostAndIncome()
);
addCost('zakupy', 'luty', '2022-03-04', 201.98, 'Food');
console.log(
    'Current account state = ',
    getAccountState() + '\n',
    'List of costs and incomes: ',
    listAllCostAndIncome()
);
addCost('zakupy', 'comment', '202203-04', 201.98, 'Food');
console.log(
    'Current account state = ',
    getAccountState() + '\n',
    'List of costs and incomes: ',
    listAllCostAndIncome()
);
addCost('zakupy', 'luty', '2022-03-04', 3598.02, 'Food');
console.log(
    'Current account state = ',
    getAccountState() + '\n',
    'List of costs and incomes: ',
    listAllCostAndIncome()
);

const listAllCostsAndIncomes = listAllCostAndIncome();

console.time('filterer time');
console.log('filter 1');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        undefined,
        undefined,
        undefined
    )
);
console.log('filter 2');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        'zakupy',
        'luty',
        undefined,
        undefined,
        undefined
    )
);
console.log('filter 3');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-03'],
        undefined,
        undefined
    )
);
console.log('filter 4');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Praca'
    )
);
console.log('filter 5');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-01', '2022-03-04'],
        undefined,
        'Praca'
    )
);
console.log('filter 6');
console.log(
    filterCostAndIncome(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 201.98],
        undefined
    )
);

console.timeEnd('filterer time');
