const { BaseController } = require('../../utils/baseController');
const { Helpers } = require('../../utils/helpers');
const { CashFlowManager } = require('../cashFlowManager/cashFlowManager');
const { Filterer } = require('./filterer');

class FiltererController extends BaseController {
    constructor(req, res) {
        super(req, res);
    }

    filterCostAndIncome() {
        let reqURL = this.req.url
            .replace('/api/filterBudgetItem?', '')
            .split('&');

        let reqURLParam = new Helpers();
        reqURLParam.pushReqStringParams(reqURL);

        let reqURLParamParsed = reqURLParam;
        reqURLParamParsed.parseReqURLParams();
        let paramsToPassInRequest = reqURLParamParsed.reqURLParamParsed;

        let reqParams = {
            title: paramsToPassInRequest[0],
            comment: paramsToPassInRequest[1],
            date: paramsToPassInRequest[2],
            amount: paramsToPassInRequest[3],
            category: paramsToPassInRequest[4],
            subcategory: paramsToPassInRequest[5],
        };

        this.res.setHeader('Access-Control-Allow-Origin', '*');
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
                    reqParams.category,
                    reqParams.subcategory
                )
            )
        );
    }
}

module.exports = { FiltererController };
