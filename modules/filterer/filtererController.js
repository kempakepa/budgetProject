const { BaseController } = require('../../utils/baseController');
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

        let reqURLParam = [];

        for (let el of reqURL) {
            let reqParams = el.split('=');
            reqURLParam.push(reqParams.pop());
        }
        // pierwsza najgorsza wersja
        for (let i = 0; i < reqURLParam.length; i++) {
            if (reqURLParam[i] == 'undefined') {
                reqURLParam[i] = undefined;
            } else if (
                reqURLParam[i].includes('[') &&
                reqURLParam[i].includes('-')
            ) {
                reqURLParam[i] = decodeURIComponent(
                    reqURLParam[i].slice(1, reqURLParam[i].length - 1)
                ).split(',');
                reqURLParam[i] = [
                    reqURLParam[i][0].trim(),
                    reqURLParam[i][1].trim(),
                ];
            } else if (
                reqURLParam[i].includes('[') &&
                !reqURLParam[i].includes('-')
            ) {
                reqURLParam[i] = decodeURIComponent(
                    reqURLParam[i].slice(1, reqURLParam[i].length - 1)
                ).split(',');

                reqURLParam[i] = [
                    parseInt(reqURLParam[i][0], 10),
                    parseInt(reqURLParam[i][1], 10),
                ];
            }
        }

        let reqParams = {
            title: reqURLParam[0],
            comment: reqURLParam[1],
            date: reqURLParam[2],
            amount: reqURLParam[3],
            category: reqURLParam[4],
        };

        this.res.setHeader('Content-Type', 'application/json');
        this.res.statusCode = 200;
        this.res.end(
            JSON.stringify(
                new Filterer().filterCostAndIncome(
                    CashFlowManagerController.listAllCostsAndIncomes,
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
