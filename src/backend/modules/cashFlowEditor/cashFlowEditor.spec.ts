import { Tests } from '../../../../tests/tests';
import { CashFlowManager } from '../cashFlowManager/cashFlowManager';
import { CashFlowEditor } from './cashFlowEditor';

Tests.setModuleName('Edit cost and incomes Module Tests');

interface CashFlowItem {
    title: string;
    amount: number;
    category: 'Food' | 'Salary';
    date: Date;
    comment: string;
}

interface ChangedCashFlowItem extends CashFlowItem {
    cashFlowType: 'COST' | 'INCOME';
    id?: number;
}

interface EditCashFlowItemResult {
    result: 'UPDATED' | 'WRONG VALUES';
}

interface TestData {
    testTitle: string;
    existingItem: CashFlowItem;
    changedItem: ChangedCashFlowItem;
    expectedResult: EditCashFlowItemResult;
}

const costTestsData: TestData[] = [
    {
        testTitle: 'Change all values',
        existingItem: {
            title: 'someTitle',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: 'someOtherTitle',
            amount: 105,
            category: 'Salary',
            date: new Date('2022-03-01'),
            comment: 'otherComment',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
    {
        testTitle: 'Change cash flow item type',
        existingItem: {
            title: 'someTitle2',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: 'someTitle2',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
    {
        testTitle: 'Should return error if amount = 0',
        existingItem: {
            title: 'someTitle3',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: 'someTitle3',
            amount: 0,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
    {
        testTitle: 'Should return error if amount < 0',
        existingItem: {
            title: 'someTitle4',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: 'someTitle4',
            amount: -10,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
    {
        testTitle: 'Should return error if title is empty',
        existingItem: {
            title: 'someTitle4',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: '',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
];

const incomeTestsData: TestData[] = [
    {
        testTitle: 'Change all values',
        existingItem: {
            title: 'someTitle',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: 'someOtherTitle',
            amount: 105,
            category: 'Salary',
            date: new Date('2022-03-01'),
            comment: 'otherComment',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
    {
        testTitle: 'Change cash flow item type',
        existingItem: {
            title: 'someTitle2',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'COST',
            title: 'someTitle2',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'UPDATED',
        },
    },
    {
        testTitle: 'Should return error if amount = 0',
        existingItem: {
            title: 'someTitle3',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: 'someTitle3',
            amount: 0,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
    {
        testTitle: 'Should return error if amount < 0',
        existingItem: {
            title: 'someTitle4',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: 'someTitle4',
            amount: -10,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
    {
        testTitle: 'Should return error if title is empty',
        existingItem: {
            title: 'someTitle4',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        changedItem: {
            cashFlowType: 'INCOME',
            title: '',
            amount: 100,
            category: 'Food',
            date: new Date('2022-01-01'),
            comment: 'comment',
        },
        expectedResult: {
            result: 'WRONG VALUES',
        },
    },
];

for (const testData of costTestsData) {
    //Given
    const addedItem = new CashFlowManager().addCost(testData.existingItem);
    testData.changedItem.id = addedItem.id;

    //When
    const result = new CashFlowEditor().editCashFlowItem(testData.changedItem);

    //Then
    Tests.verify(
        `Cash Flow Editor - cost test - ${testData.testTitle}`,
        testData.expectedResult,
        result
    );
}

for (const testData of incomeTestsData) {
    //Given
    const addedItem = new CashFlowManager().addIncome(testData.existingItem);
    testData.changedItem.id = addedItem.id;

    //When
    const result = new CashFlowEditor().editCashFlowItem(testData.changedItem);

    //Then
    Tests.verify(
        'Cash Flow Editor - income test',
        testData.expectedResult,
        result
    );
}

Tests.summaryTests();
