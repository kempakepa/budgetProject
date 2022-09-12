const { BaseController } = require('../../utils/baseController');
const { CashFlowManager } = require('./cashFlowManager');
const { CashFlowValidator } = require('./cashFlowValidator');

class CashFlowManagerController extends BaseController {
    constructor(req, res) {
        super(req, res);
    }
    static listAllCostsAndIncomes = [];

    addCost() {
        let reqBody = '';

        this.req.on('data', (part) => {
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
                    item.category
                ).validateInput()
            ) {
                new CashFlowManager().addCost(
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category
                );
                this.cost = [
                    item.title,
                    item.comment,
                    item.date,
                    -item.amount,
                    item.category,
                ];
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 200;
                //this.res.write(JSON.stringify('Cost added successfully'));
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
        this.req.on('data', (part) => {
            reqBody = reqBody + part;
        });

        this.req.on('end', () => {
            const item = JSON.parse(reqBody);

            if (
                new Validation(
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category
                ).validateInput()
            ) {
                new CashFlowManager().addIncome(
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category
                );
                this.income = [
                    item.title,
                    item.comment,
                    item.date,
                    item.amount,
                    item.category,
                ];
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

module.exports = { CashFlowManagerController };
