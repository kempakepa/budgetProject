export class AccountState {
    static accountState = 0;

    static getAccountState() {
        return AccountState.accountState;
    }
    static changeAccountState(amount: number) {
        AccountState.accountState = AccountState.accountState + amount;
    }
}
