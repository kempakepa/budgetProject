import { CashFlowItem } from '../../utils/baseInterface';
import { AccountState } from '../accountState/accountState';
import { CashFlowValidator } from './cashFlowValidator';

export class CashFlowManager {
    static listAllCostsAndIncomes: any = [];
    static cashFlowItem: CashFlowItem;

    addCost(cashFlowItem: CashFlowItem) {
        if (
            new CashFlowValidator(
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                cashFlowItem.amount,
                cashFlowItem.category
            ).validateInput()
        ) {
            let cost: unknown = [
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                -cashFlowItem.amount,
                cashFlowItem.category,
            ];
            CashFlowManager.listAllCostsAndIncomes.push(cost);
            AccountState.changeAccountState(-cashFlowItem.amount);
            return 'Cost added successfully';
        } else {
            return 'Invalid input';
        }
    }

    addIncome(cashFlowItem: CashFlowItem) {
        if (
            new CashFlowValidator(
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                cashFlowItem.amount,
                cashFlowItem.category
            ).validateInput()
        ) {
            let income: unknown = [
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                cashFlowItem.amount,
                cashFlowItem.category,
            ];
            CashFlowManager.listAllCostsAndIncomes.push(income);
            AccountState.changeAccountState(cashFlowItem.amount);
            return 'Income added successfully';
        } else {
            return 'Invalid input';
        }
    }

    listAllCostAndIncome() {
        return CashFlowManager.listAllCostsAndIncomes;
    }
}
