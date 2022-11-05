export interface CashFlowItem {
    title: string;
    comment: string;
    date: string; //albo string, not sure
    amount: number;
    category: string;
}

/* export function createRandomCashFlowItem(cashFlowItem: CashFlowItem) {
    return {
        title: cashFlowItem.title,
        comment: cashFlowItem.comment,
        date: cashFlowItem.date,
        amount: cashFlowItem.amount,
        category: cashFlowItem.category,
    };
} */
