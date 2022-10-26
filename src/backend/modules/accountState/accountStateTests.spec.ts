import { Tests } from '../../../../tests/tests';
import { AccountState } from './accountState';

Tests.setModuleName('accountState Module Tests');

//let accountState = new AccountState();

Tests.verify(
    'accountState should equal ' + '0',
    0,
    AccountState.getAccountState()
);
AccountState.changeAccountState(15);
Tests.verify(
    'accountState should equal ' + '15',
    15,
    AccountState.getAccountState()
);
AccountState.changeAccountState(0);
Tests.verify(
    'accountState should equal ' + '15',
    15,
    AccountState.getAccountState()
);
AccountState.changeAccountState(1.5);
Tests.verify(
    'accountState should equal ' + '16.5',
    16.5,
    AccountState.getAccountState()
);
AccountState.changeAccountState(-1.5);
Tests.verify(
    'accountState should equal ' + '15.0',
    15.0,
    AccountState.getAccountState()
);

Tests.summaryTests();
