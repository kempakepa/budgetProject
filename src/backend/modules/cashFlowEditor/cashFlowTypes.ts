export interface CashFlowItem {
    title: string;
    amount: number;
    category: 'Food' | 'Salary';
    date: Date;
    comment: string;
}

export interface ChangedCashFlowItem extends CashFlowItem {
    cashFlowType: 'COST' | 'INCOME';
    id?: number;
}
