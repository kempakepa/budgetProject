const { BaseController } = require('../../utils/baseController');
const { Helpers } = require('../../utils/helpers');
const { CashFlowManager } = require('../cashFlowManager/cashFlowManager');
const {
    CashFlowManagerController,
} = require('../cashFlowManager/cashFlowManagerController');
const { Filterer } = require('./filterer');

class FiltererController extends BaseController {
    constructor(req, res) {
        super(req, res);
    }

    filterCostAndIncome() {
        let reqURL = this.req.url
            .replace('/api/filterBudgetItem?', '')
            .split('&');

        let reqURLParam = Helpers.reqURLParam;
        Helpers.splitAndPushReqURLParams(reqURL);
        Helpers.parseReqURLParams();

        let reqParams = {
            title: reqURLParam[0],
            comment: reqURLParam[1],
            date: reqURLParam[2],
            amount: reqURLParam[3],
            category: reqURLParam[4],
        };
        console.log(reqParams, CashFlowManager.listAllCostsAndIncomes);

        this.res.setHeader('Content-Type', 'application/json');
        this.res.statusCode = 200;
        this.res.end(
            JSON.stringify(
                new Filterer().filterCostAndIncome(
                    CashFlowManager.listAllCostsAndIncomes,
                    reqParams.title,
                    reqParams.comment,
                    reqParams.date,
                    reqParams.amount,
                    reqParams.category
                )
            )
        );
    }
}

module.exports = { FiltererController };
