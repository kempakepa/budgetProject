import dayjs from 'dayjs';
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

        /* const oldAmount =
            CashFlowManager.listAllCostsAndIncomes[indexOfElement][4];

        if (Math.abs(oldAmount) !== updatedElement.amount) {
            const amountDiff = oldAmount - updatedElement.amount;
        } */

        CashFlowManager.listAllCostsAndIncomes[indexOfElement][1] =
            updatedElement.title;
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][2] =
            updatedElement.comment;
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][3] = dayjs(
            updatedElement.date
        ).format('YYYY-MM-DD');
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][4] =
            updatedElement.amount;
        CashFlowManager.listAllCostsAndIncomes[indexOfElement][5] =
            updatedElement.category;

        return {
            result: 'UPDATED',
        };

        //TODO: co jesli nie znaleziono indexu?
    }
}
