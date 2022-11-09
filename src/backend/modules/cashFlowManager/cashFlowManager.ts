import { CashFlowItem } from '../../utils/baseInterface';
import { AccountState } from '../accountState/accountState';
import { CashFlowValidator } from './cashFlowValidator';

interface CashFlowManagerResult {
    id: number | undefined;
    message: string;
}

export class CashFlowManager {
    static listAllCostsAndIncomes: any = [];
    static cashFlowItem: CashFlowItem;

    addCost(cashFlowItem: CashFlowItem): CashFlowManagerResult {
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
            return {
                id: undefined,
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
            return {
                id: undefined,
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
}
