import { Tests } from '../../../../tests/tests';
import { AccountState } from '../accountState/accountState';
import { CashFlowManager } from '../cashFlowManager/cashFlowManager';
import { Filterer } from '../filterer/filterer';
import { CashFlowEditor } from './cashFlowEditor';
import { convertCashFlowItemToStringDate } from './cashFlowEditorConverter';
import { CashFlowItem, ChangedCashFlowItem } from './cashFlowTypes';

Tests.setModuleName('Cash Flow Editor Integration Module Tests');

//Given
const cashFlowEditor = new CashFlowEditor();
const income: CashFlowItem = {
    title: 'someIncome',
    amount: 1000,
    category: 'Salary',
    comment: 'some comment',
    date: new Date('2022-01-01'),
};
const cost: CashFlowItem = {
    title: 'someCost',
    amount: 100,
    category: 'Food',
    comment: 'some comment',
    date: new Date('2022-01-01'),
};
const addedIncome = new CashFlowManager().addIncome(
    convertCashFlowItemToStringDate(income)
);
const addedCost = new CashFlowManager().addCost(
    convertCashFlowItemToStringDate(cost)
);

//When
const changedCost: ChangedCashFlowItem = {
    ...cost,
    cashFlowType: 'COST',
    id: addedCost.id,
};

changedCost.amount = 1000;
cashFlowEditor.editCashFlowItem(changedCost);

changedCost.cashFlowType = 'INCOME';
cashFlowEditor.editCashFlowItem(changedCost);

//Then
const costAndIncomes = new CashFlowManager().listAllCostAndIncome();
const filteredIncomes = new Filterer().filterCostAndIncome(
    costAndIncomes,
    'someCost',
    undefined,
    undefined,
    [1000, 1000],
    'Food'
);

Tests.verify(
    'Should filterer return income with 1000 amount',
    [2, 'someCost', 'some comment', '2022-01-01', 1000, 'Food'],
    filteredIncomes[0]
);

Tests.verify(
    'Account state should be = 2000',
    2000,
    AccountState.getAccountState()
);

Tests.summaryTests();
