import { Tests } from '../../../../tests/tests';
import { CashFlowManager } from '../cashFlowManager/cashFlowManager';
import { CashFlowEditor } from './cashFlowEditor';

Tests.setModuleName('Edit cost and incomes Module Tests');

const costTestsData = [
    {
        existingItem: {
            title: 'someTitle',
            amount: 100,
            category: 'Food',
            date: '2022-01-01',
            comment: '',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: 'someOtherTitle',
            amount: 100,
            category: 'Food',
            date: '2022-01-01',
            comment: '',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
];

const incomeTestsData = [
    {
        existingItem: {
            title: 'someTitle',
            amount: 100,
            category: 'Food',
            date: '2022-01-01',
            comment: '',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: 'someOtherTitle',
            amount: 100,
            category: 'Food',
            date: '2022-01-01',
            comment: '',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
];

for (const testData of costTestsData) {
    //Given
    const addedItem = new CashFlowManager().addCost(testData.existingItem);
    //TODO: update id in changedItem

    //When
    const result = new CashFlowEditor().editCashFlowItem(testData.changedItem);

    //Then
    Tests.verify(
        'Cash Flow Editor - cost test',
        testData.expectedResult,
        result
    );
}

for (const testData of incomeTestsData) {
    //Given
    const addedItem = new CashFlowManager().addIncome(testData.existingItem);
    //TODO: update id in changedItem

    //When
    const result = new CashFlowEditor().editCashFlowItem(testData.changedItem);

    //Then
    Tests.verify(
        'Cash Flow Editor - income test',
        testData.expectedResult,
        result
    );
}
