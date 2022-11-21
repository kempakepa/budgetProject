import { CashFlowItem } from './baseInterface';

export class BaseConstructor implements CashFlowItem {
    title;
    comment;
    date;
    amount;
    category;
    subcategory;
    constructor(
        title: string,
        comment: string,
        date: string,
        amount: number,
        category: string,
        subcategory?: string
    ) {
        this.title = title;
        this.comment = comment;
        this.date = date;
        this.amount = amount;
        this.category = category;
        this.subcategory = subcategory;
    }
}
