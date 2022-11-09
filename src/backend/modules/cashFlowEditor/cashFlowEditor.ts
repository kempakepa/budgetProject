import dayjs from 'dayjs';
import { AccountState } from '../accountState/accountState';
import { CashFlowManager } from '../cashFlowManager/cashFlowManager';
import { ChangedCashFlowItem } from './cashFlowTypes';

export class CashFlowEditor {
    editCashFlowItem(updatedElement: ChangedCashFlowItem) {
        if (updatedElement.amount <= 0) {
            return {
                result: 'WRONG VALUES',
            };
        } else if (!updatedElement.title.trim()) {
            return {
                result: 'WRONG VALUES',
            };
        }

        const indexOfElement = CashFlowManager.listAllCostsAndIncomes.findIndex(
            (cashFlowItem: any[]) => cashFlowItem[0] === updatedElement.id
        );
        //TODO: add test if indexOfElement = -1

        const oldAmount =
            CashFlowManager.listAllCostsAndIncomes[indexOfElement][4];

        if (oldAmount < 0) {
            if (updatedElement.cashFlowType === 'COST') {
                const accountStateDiff =
                    Math.abs(oldAmount) - updatedElement.amount;
                AccountState.changeAccountState(accountStateDiff);
            } else if (updatedElement.cashFlowType === 'INCOME') {
                const accountStateDiff =
                    updatedElement.amount + Math.abs(oldAmount);
                AccountState.changeAccountState(accountStateDiff);
            }
        } else {
            if (updatedElement.cashFlowType === 'COST') {
                const accountStateDiff = -(oldAmount + updatedElement.amount);
                AccountState.changeAccountState(accountStateDiff);
            } else if (updatedElement.cashFlowType === 'INCOME') {
                const accountStateDiff =
                    updatedElement.amount - Math.abs(oldAmount);
                AccountState.changeAccountState(accountStateDiff);
            }
        }

        CashFlowManager.listAllCostsAndIncomes[indexOfElement][1] =
            updatedElement.title;
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][2] =
            updatedElement.comment;
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][3] = dayjs(
            updatedElement.date
        ).format('YYYY-MM-DD');

        if (updatedElement.cashFlowType === 'COST') {
            CashFlowManager.listAllCostsAndIncomes[indexOfElement][4] =
                -updatedElement.amount;
        } else {
            CashFlowManager.listAllCostsAndIncomes[indexOfElement][4] =
                updatedElement.amount;
        }

        CashFlowManager.listAllCostsAndIncomes[indexOfElement][5] =
            updatedElement.category;

        return {
            result: 'UPDATED',
        };
    }
}
