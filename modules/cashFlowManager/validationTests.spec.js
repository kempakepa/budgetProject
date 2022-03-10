const { setModuleName, verify, summaryTests } = require('../../tests/tests.js');
const { validateInput } = require('./validation.js');

setModuleName('validation cashflowManager Module Tests');

verify(
    `should return false if ammount type is string`,
    false,
    validateInput('title', 'comment', '2022-01-01', 'amount', 'category')
);

verify(
    `shourld return true if all params has correct format`,
    true,
    validateInput('title', 'comment', '2022-01-01', 11, 'category')
);

verify(
    `should return false if ammount is negative`,
    false,
    validateInput('title', 'comment', '2022-01-01', -11, 'category')
);

verify(
    `shourld return true if all params has correct format an amount = 0`,
    true,
    validateInput('title', 'comment', '2022-01-01', 0, 'category')
);
verify(
    `should return false if date format is not correct`,
    false,
    validateInput('title', 'comment', '202201-01', 0, 'category')
);

//dodac walidacje dni miesiaca
verify(
    `should return false if date is incorrect`,
    false,
    validateInput('title', 'comment', '2022-11-31', 0, 'category')
);

verify(
    `should return false if date is incorrect`,
    false,
    validateInput('title', 'comment', '2022-12-44', 0, 'category')
);
verify(
    `should return false if all parameter incorrect format passed`,
    false,
    validateInput(undefined, undefined, undefined, undefined, undefined)
);
verify(`should return false if no parameter passed`, false, validateInput());
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('title')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('comment')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('2022-02-01')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput(11.11)
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('category')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('title', 'comment')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('title', 'comment', 'date')
);
verify(
    `should return false if not all parameters passed`,
    false,
    validateInput('title', 'comment', 'date', 11.1)
);
verify(
    `should return false if parameters incorrect format passed`,
    false,
    validateInput('title', 'date', 'amount', 'category')
);

summaryTests();
