const { Tests } = require('../../tests/tests.js');
const { Validation } = require('./validation.js');

Tests.setModuleName('validation cashflowManager Module Tests');

Tests.verify(
    `should return false if ammount type is string`,
    false,
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation('title', 'comment', 'auć', 0, 'category').validateInput()
);

Tests.verify(
    `should return false if date is incorrect`,
    false,
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation(
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
    new Validation().validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation('title').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation(undefined, 'comment').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation(undefined, undefined, '2022-02-01').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation(undefined, undefined, undefined, 11.11).validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation(
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
    new Validation('title', 'comment').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation('title', 'comment', 'date').validateInput()
);
Tests.verify(
    `should return false if not all parameters passed`,
    false,
    new Validation('title', 'comment', 'date', 11.1).validateInput()
);
Tests.verify(
    `should return false if parameters incorrect format passed`,
    false,
    new Validation('title', 'date', 'amount', 'category').validateInput()
);

Tests.summaryTests();
