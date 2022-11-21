import { CashFlowItem } from './cashFlowTypes';
import { CashFlowItem as CashFlowItemWithStringDate } from '../../utils/baseInterface';
import dayjs from 'dayjs';

export const convertCashFlowItemToStringDate = (
    cashFlowItem: CashFlowItem
): CashFlowItemWithStringDate => {
    return {
        amount: cashFlowItem.amount,
        category: cashFlowItem.category,
        comment: cashFlowItem.comment,
        title: cashFlowItem.title,
        date: dayjs(cashFlowItem.date).format('YYYY-MM-DD'),
    };
};
