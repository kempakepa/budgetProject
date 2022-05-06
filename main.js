const {
    CashFlowManager,
} = require('./modules/cashFlowManager/cashFlowManager');
const { Filterer } = require('./modules/filterer/filterer');

newRecord = new CashFlowManager(
    'wynagrodzenie',
    'luty',
    '2022-03-04',
    3500,
    'Praca'
);
newRecord.addIncome();
console.log(
    'Current account state = ',
    newRecord.getAccountState() + '\n',
    'List of costs and incomes: ',
    newRecord.listAllCostAndIncome()
);

newRecord.title = 'zakupy';
newRecord.comment = 'comment';
newRecord.date = '202203-04';
newRecord.amount = 201.98;
newRecord.category = 'Food';

newRecord.addCost();
console.log(
    'Current account state = ',
    newRecord.getAccountState() + '\n',
    'List of costs and incomes: ',
    newRecord.listAllCostAndIncome()
);

newRecord.title = 'zakupy';
newRecord.comment = 'luty';
newRecord.date = '2022-03-04';
newRecord.amount = 3598.02;
newRecord.category = 'Food';

newRecord.addCost();
console.log(
    'Current account state = ',
    newRecord.getAccountState() + '\n',
    'List of costs and incomes: ',
    newRecord.listAllCostAndIncome()
);

const listAllCostsAndIncomes = newRecord.listAllCostsAndIncomes;

//console.time('filterer time');
console.log('filter 1');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        'luty',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);
console.log('filter 2');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        'zakupy',
        'luty',
        undefined,
        undefined,
        undefined
    ).filterCostAndIncome()
);
console.log('filter 3');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-03'],
        undefined,
        undefined
    ).filterCostAndIncome()
);
console.log('filter 4');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-04', '2022-03-04'],
        undefined,
        'Praca'
    ).filterCostAndIncome()
);
console.log('filter 5');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        ['2022-03-01', '2022-03-04'],
        undefined,
        'Praca'
    ).filterCostAndIncome()
);
console.log('filter 6');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 201.98],
        undefined
    ).filterCostAndIncome()
);

console.log('filter 7');
console.log(
    new Filterer(
        listAllCostsAndIncomes,
        undefined,
        undefined,
        undefined,
        [0, 3500],
        undefined
    ).filterCostAndIncome()
);

//console.timeEnd('filterer time');
