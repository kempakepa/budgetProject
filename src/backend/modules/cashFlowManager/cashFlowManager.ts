import { CashFlowItem } from '../../utils/baseInterface';
import { AccountState } from '../accountState/accountState';
import { CashFlowValidator } from './cashFlowValidator';

interface CashFlowManagerResult {
    id: number | undefined;
    message: string;
}

export class CashFlowManager {
    static listAllCostsAndIncomes: any[] = [];
    addCost(cashFlowItem: CashFlowItem): CashFlowManagerResult {
        if (CashFlowValidator.validateInput(cashFlowItem)) {
            const newId = this.generateNewId();
            let cost: unknown = [
                newId,
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                -cashFlowItem.amount,
                cashFlowItem.category,
                cashFlowItem.subcategory,
            ];
            CashFlowManager.listAllCostsAndIncomes.push(cost);
            AccountState.changeAccountState(-cashFlowItem.amount);
            return {
                id: newId,
                message: 'Cost added successfully',
            };
        } else {
            return {
                id: undefined,
                message: 'Invalid input',
            };
        }
    }
    addIncome(cashFlowItem: CashFlowItem): CashFlowManagerResult {
        if (CashFlowValidator.validateInput(cashFlowItem)) {
            const newId = this.generateNewId();

            let income: unknown = [
                newId,
                cashFlowItem.title,
                cashFlowItem.comment,
                cashFlowItem.date,
                cashFlowItem.amount,
                cashFlowItem.category,
                cashFlowItem.subcategory,
            ];
            CashFlowManager.listAllCostsAndIncomes.push(income);
            AccountState.changeAccountState(cashFlowItem.amount);
            return {
                id: newId,
                message: 'Income added successfully',
            };
        } else {
            return {
                id: undefined,
                message: 'Invalid input',
            };
        }
    }

    listAllCostAndIncome() {
        return CashFlowManager.listAllCostsAndIncomes;
    }

    private generateNewId = () => {
        const list = CashFlowManager.listAllCostsAndIncomes;
        if (list.length === 0) {
            return 1;
        }
        return list[list.length - 1][0] + 1;
    };
}
