const {
    AccountStateController,
} = require('./modules/accountState/accountStateController');
const { CashFlowEditor } = require('./modules/cashFlowEditor/cashFlowEditor');
const {
    CashFlowEditorController,
} = require('./modules/cashFlowEditor/cashFlowEditorController');
const {
    CashFlowManagerController,
} = require('./modules/cashFlowManager/cashFlowManagerController');
const { FiltererController } = require('./modules/filterer/filtererController');

const endpoints = [
    {
        url: '/api/accountState',
        method: 'GET',
        controller: (req, res) => {
            const response = {
                response: new AccountStateController(
                    req,
                    res
                ).getAccountState(),
            };
            //res.end(JSON.stringify(response));
        },
    },
    {
        url: '/api/addCostItem',
        method: 'POST',
        controller: (req, res) => {
            const response = {
                response: new CashFlowManagerController(req, res).addCost(),
            };
            //res.end(JSON.stringify(response));
        },
    },
    {
        url: '/api/addIncomeItem',
        method: 'POST',
        controller: (req, res) => {
            const response = {
                response: new CashFlowManagerController(req, res).addIncome(),
            };
            //res.end(JSON.stringify(response));
        },
    },
    {
        url: '/api/filterBudgetItem',
        method: 'GET',
        controller: (req, res) => {
            const response = {
                response: new FiltererController(
                    req,
                    res
                ).filterCostAndIncome(),
            };
            //res.end(JSON.stringify(response));
        },
    },
    {
        url: '/api/editCashFlow',
        method: 'PUT',
        controller: (req, res) => {
            new CashFlowEditorController(req, res).editCashFlowItem();
        },
    },
];

module.exports = { endpoints };
