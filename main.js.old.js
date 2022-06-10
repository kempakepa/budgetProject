const { AccountState } = require('./modules/accountState/accountState');
const {
    CashFlowManager,
} = require('./modules/cashFlowManager/cashFlowManager');
const { Filterer } = require('./modules/filterer/filterer');

new CashFlowManager().addIncome(
    'wynagrodzenie',
    'luty',
    '2022-03-04',
    3500,
    'Praca'
);

console.log(
    'Current account state = ',
    AccountState.getAccountState() + '\n',
    'List of costs and incomes: ',
    new CashFlowManager().listAllCostAndIncome()
);

new CashFlowManager().addCost('zakupy', 'comment', '202203', 201.98, 'Food');

console.log(
    'Current account state = ',
    AccountState.getAccountState() + '\n',
    'List of costs and incomes: ',
    new CashFlowManager().listAllCostAndIncome()
);

new CashFlowManager().addCost('zakupy', 'luty', '2022-03-04', 3598.02, 'Food');

console.log(
    'Current account state = ',
    AccountState.getAccountState() + '\n',
    'List of costs and incomes: ',
    new CashFlowManager().listAllCostAndIncome()
);

//console.time('filterer time');
console.log('filter 1');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        'luty',
        undefined,
        undefined,
        undefined
    )
);
console.log('filter 2');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        'zakupy',
        'luty',
        undefined,
        undefined,
        undefined
    )
);
console.log('filter 3');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-03'],
        undefined,
        undefined
    )
);
console.log('filter 4');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Praca'
    )
);
console.log('filter 5');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-01', '2022-03-04'],
        undefined,
        'Praca'
    )
);
console.log('filter 6');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 201.98],
        undefined
    )
);

console.log('filter 7');
console.log(
    new Filterer().filterCostAndIncome(
        CashFlowManager.listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 3500],
        undefined
    )
);

//console.timeEnd('filterer time');
