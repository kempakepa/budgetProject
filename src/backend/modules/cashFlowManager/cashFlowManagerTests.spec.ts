import { Tests } from '../../../../tests/tests.js';
import { CashFlowManager } from './cashFlowManager.js';

Tests.setModuleName('cashFlowManager Tests');

{
    const addCostResult = new CashFlowManager().addCost({
        title: 'zakupy',
        comment: 'lidl',
        date: '2022-02-01',
        amount: 22.22,
        category: 'Food',
    });

    Tests.verify(
        `1 function addCost should be fired`,
        'Cost added successfully',
        addCostResult.message
    );

    Tests.verify(
        `1 function addCost should return id`,
        !null, //TODO: check if its working
        addCostResult.id
    );
}

Tests.verify(
    `should display addCost input data in array with -amount`,
    [[1, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food']],
    new CashFlowManager().listAllCostAndIncome()
);

{
    Tests.verify(
        `2 function addCost should be fired`,
        'Cost added successfully',
        new CashFlowManager().addCost({
            title: 'zakupy',
            comment: 'lidl',
            date: '2022-02-01',
            amount: 22.22,
            category: 'Food',
        }).message
    );
}

Tests.verify(
    `should display 2 addCost input data in array with -amount`,
    [
        [1, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [2, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

{
    Tests.verify(
        `4 function addIncome should be fired`,
        'Income added successfully',
        new CashFlowManager().addIncome({
            title: 'wynagrodzenie',
            comment: 'luty',
            date: '2022-02-01',
            amount: 3500,
            category: 'Praca',
        }).message
    );
}

Tests.verify(
    `should display 3 element array with 2 not changed addCost and 1 addIncome input data`,
    [
        [1, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [2, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [3, 'wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

{
    Tests.verify(
        `5 function addIncome should be fired`,
        'Income added successfully',
        new CashFlowManager().addIncome({
            title: 'stypendium',
            comment: 'luty',
            date: '2022-02-01',
            amount: 100,
            category: 'Studia',
        }).message
    );
}

Tests.verify(
    `should display 4 element array with 2 not changed addCost and 2 addIncome input data`,
    [
        [1, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [2, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [3, 'wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
        [4, 'stypendium', 'luty', '2022-02-01', 100, 'Studia'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

{
    Tests.verify(
        `7 function addCost should not be fired`,
        `Invalid input`,
        new CashFlowManager().addCost({
            title: 'stypendium',
            comment: 'luty',
            date: '20222-02-01',
            amount: 12,
            category: 'Studia',
        }).message
    );
}

Tests.verify(
    `should display 4 element array with 2 not changed addCost and 2 addIncome input data`,
    [
        [1, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [2, 'zakupy', 'lidl', '2022-02-01', -22.22, 'Food'],
        [3, 'wynagrodzenie', 'luty', '2022-02-01', 3500, 'Praca'],
        [4, 'stypendium', 'luty', '2022-02-01', 100, 'Studia'],
    ],
    new CashFlowManager().listAllCostAndIncome()
);

Tests.summaryTests();
