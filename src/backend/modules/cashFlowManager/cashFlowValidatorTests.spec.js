const { Tests } = require('../../../../tests/tests.js');
const { CashFlowValidator } = require('./cashFlowValidator');

Tests.setModuleName('validation cashflowManager Module Tests');

Tests.verify(
    `should return false if ammount type is string`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        'amount',
        'category'
    ).validateInput()
);

Tests.verify(
    `shourld return true if all params has correct format`,
    true,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        11,
        'category'
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
        'category'
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
        'category'
    ).validateInput()
);
Tests.verify(
    `should return false if date format is not correct`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '202201-01',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-11-31',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        'auć',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-11-32',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-1-1',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '-2022-1-1',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-1',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-1-01',
        0,
        'category'
    ).validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-12-44',
        0,
        'category'
    ).validateInput()
);
Tests.verify(
    `should return false if all parameter incorrect format passed`,
    false,
    new CashFlowValidator(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ).validateInput()
);
Tests.verify(
    `should return false if no parameter passed`,
    false,
    new CashFlowValidator().validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator('title').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator(undefined, 'comment').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator(undefined, undefined, '2022-02-01').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator(
        undefined,
        undefined,
        undefined,
        11.11
    ).validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator(
        undefined,
        undefined,
        undefined,
        undefined,
        'category'
    ).validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator('title', 'comment').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator('title', 'comment', 'date').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new CashFlowValidator('title', 'comment', 'date', 11.1).validateInput()
);
Tests.verify(
    `should return false if parameters incorrect format passed`,
    false,
    new CashFlowValidator('title', 'date', 'amount', 'category').validateInput()
);

Tests.summaryTests();
