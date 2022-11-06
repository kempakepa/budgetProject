import { CashFlowItem } from './baseInterface';

export class BaseConstructor implements CashFlowItem {
    title;
    comment;
    date;
    amount;
    category;
    constructor(
        title: string,
        comment: string,
        date: string,
        amount: number,
        category: string
    ) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
}
