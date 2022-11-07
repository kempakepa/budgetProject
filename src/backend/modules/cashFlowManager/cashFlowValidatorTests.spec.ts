import { Tests } from '../../../../tests/tests';
import { CashFlowValidator } from './cashFlowValidator';

Tests.setModuleName('validation cashflowManager Module Tests');

//mozna usunac - parametr typu number nie moze przyjmowac wartosci typu string
/* Tests.verify(
    `should return false if ammount type is string`,
    false,
    new CashFlowValidator(
        'title',
        'comment',
        '2022-01-01',
        'amount',
        'category'
    ).validateInput()
); */

Tests.verify(
    `should return true if all params has correct format`,
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
        10,
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
        10,
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
        10,
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
        10,
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
        10,
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
        10,
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
        10,
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
        20,
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
        20,
        'category'
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
        'category'
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
        'category'
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
        'category'
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
        ''
    ).validateInput()
);

//mozna usunac - parametry typu string i number nie moga przyjmowac wartosci undefined
/* Tests.verify(
    `should return false if all parameter incorrect format passed`,
    false,
    new CashFlowValidator(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ).validateInput()
); */

//mozna usunac - CashFlowValidator wymaga 5 parametrow o zdefiniowanych typach
/* Tests.verify(
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
); */

Tests.summaryTests();
