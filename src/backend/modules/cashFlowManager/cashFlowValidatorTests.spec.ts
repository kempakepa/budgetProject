import { Tests } from '../../../../tests/tests';
import { CashFlowValidator } from './cashFlowValidator';

Tests.setModuleName('validation cashflowManager Module Tests');

Tests.verify(
    `should return true if all params has correct format`,
    true,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        11,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if ammount is negative`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        -11,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `shourld return true if all params has correct format an amount = 0`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        0,
        'category',
        'Parts'
    ).validateInput()
);
Tests.verify(
    `should return false if date format is not correct`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '202201-01',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-11-31',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        'auć',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-11-32',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-1-1',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '-2022-1-1',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-1',
        10,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-1-01',
        20,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-12-44',
        20,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if title is empty string`,
    false,
    new CashFlowValidator(
        '',
        'comment',
        '2022-1-01',
        20,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if comment is empty string`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-1-01',
        20,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if date is empty string`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '',
        20,
        'category',
        ''
    ).validateInput()
);

Tests.verify(
    `should return false if category is empty string`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-02-02',
        10,
        '',
        ''
    ).validateInput()
);

Tests.summaryTests();
