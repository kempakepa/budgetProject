const { BaseController } = require('../../utils/baseController');
const { CashFlowManager } = require('./cashFlowManager');
const { Validation } = require('./validation');

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
                new Validation(
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
                this.res.end();
            } else {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 400;
                this.res.end();
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
                this.res.end();
            } else {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 400;
                this.res.end();
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