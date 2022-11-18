import { CashFlowItem } from '../../utils/baseInterface';
import { AccountState } from '../accountState/accountState';
import { CashFlowValidator } from './cashFlowValidator';

export class CashFlowManager {
    static listAllCostsAndIncomes: any = [];

    addCost(cashFlowItem: CashFlowItem) {
        if (CashFlowValidator.validateInput(cashFlowItem)) {
            let cost: unknown = [
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                -cashFlowItem.amount,
                cashFlowItem.category,
                cashFlowItem.subcategory,
            ];
            CashFlowManager.listAllCostsAndIncomes.push(cost);
            AccountState.changeAccountState(-cashFlowItem.amount);
            return 'Cost added successfully';
        } else {
            return 'Invalid input';
        }
    }

    addIncome(cashFlowItem: CashFlowItem) {
        if (CashFlowValidator.validateInput(cashFlowItem)) {
            let income: unknown = [
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                cashFlowItem.amount,
                cashFlowItem.category,
                cashFlowItem.subcategory,
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
