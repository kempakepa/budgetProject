import { Tests } from '../../../../tests/tests';
import { CashFlowValidator } from './cashFlowValidator';

Tests.setModuleName('validation cashflowManager Module Tests');

Tests.verify(
    `should return true if all params has correct format`,
    true,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-01-01',
        amount: 11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if ammount is negative`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-01-01',
        amount: -11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `shourld return true if all params has correct format an amount = 0`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-01-01',
        amount: 0,
        category: 'category',
        subcategory: 'Parts',
    })
);
Tests.verify(
    `should return false if date format is not correct`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-13-01',
        amount: 10,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-11-31',
        amount: 10,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: 'auć',
        amount: 10,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-11-32',
        amount: 10,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-1-1',
        amount: 11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '-2022-1-1',
        amount: 11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-01-1',
        amount: -11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-1-01',
        amount: 21,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-12-44',
        amount: 21,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if title is empty string`,
    false,
    CashFlowValidator.validateInput({
        title: '',
        comment: 'comment',
        date: '2022-01-01',
        amount: 21,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if comment is empty string`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: '',
        date: '2022-01-01',
        amount: 1,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if date is empty string`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '',
        amount: 11,
        category: 'category',
        subcategory: '',
    })
);

Tests.verify(
    `should return false if category is empty string`,
    false,
    CashFlowValidator.validateInput({
        title: 'title',
        comment: 'comment',
        date: '2022-01-01',
        amount: 11,
        category: '',
        subcategory: '',
    })
);

Tests.summaryTests();
