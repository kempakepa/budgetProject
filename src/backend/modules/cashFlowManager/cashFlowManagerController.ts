import { BaseController } from '../../utils/baseController';
import { CashFlowManager } from './cashFlowManager';
import { CashFlowValidator } from './cashFlowValidator';

export class CashFlowManagerController extends BaseController {
    constructor(req: unknown, res: unknown) {
        super(req, res);
    }
    static listAllCostsAndIncomes = [];

    addCost() {
        let reqBody = '';

        this.req.on('data', (part: unknown) => {
            reqBody = reqBody + part;
        });

        this.req.on('end', () => {
            const item = JSON.parse(reqBody);

            if (
                new CashFlowValidator(
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category,
                    item.subcategory
                ).validateInput()
            ) {
                new CashFlowManager().addCost(item);
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 200;
                this.res.end(JSON.stringify('Cost added successfully'));
            } else {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 400;
                this.res.end(JSON.stringify('Invalid input'));
            }
        });
    }

    addIncome() {
        let reqBody = '';
        this.req.on('data', (part: unknown) => {
            reqBody = reqBody + part;
        });

        this.req.on('end', () => {
            const item = JSON.parse(reqBody);

            if (
                new CashFlowValidator(
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category,
                    item.subcategory
                ).validateInput()
            ) {
                new CashFlowManager().addIncome(item);
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 200;
                this.res.end(JSON.stringify('Income added successfully'));
            } else {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 400;
                this.res.end(JSON.stringify('Invalid input'));
            }
        });
    }

    listAllCostAndIncome() {
        this.res.setHeader('Content-Type', 'application/json');
        this.res.statusCode = 200;
        this.res.end(JSON.stringify(CashFlowManager.listAllCostsAndIncomes));
    }
}
