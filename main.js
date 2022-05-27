let http = require('http');
const {
    AccountStateController,
} = require('./modules/accountState/accountStateController');
const {
    CashFlowManagerController,
} = require('./modules/cashFlowManager/cashFlowManagerController');
const {
    FiltererController,
} = require('./modules/filterer/filtererController.js');

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/api/accountState' && method === 'GET') {
        //console.log('Jestem w /api/accountState');
        new AccountStateController(req, res).getAccountState();
    } else if (url === '/api/addCostItem' && method === 'POST') {
        //console.log('Jestem w /api/addCostItem');
        new CashFlowManagerController(req, res).addCost();
    } else if (url === '/api/addIncomeItem' && method === 'POST') {
        //console.log('Jestem w /api/addIncomeItem');
        new CashFlowManagerController(req, res).addIncome();
    } else if (url === '/api/displayBudgetItems' && method === 'GET') {
        //console.log('Jestem w /api/displayBudgetItems');
        new CashFlowManagerController(req, res).listAllCostAndIncome();
    } else if (url.startsWith('/api/filterBudgetItem') && method === 'GET') {
        //console.log(url);
        new FiltererController(req, res).filterCostAndIncome();
    } else {
        console.log('Nie ma takiego endopinta');
    }
    res.end();
    /* let reqBody = '';
        req.on('data', (part) => {
            reqBody += part;
        });
        let accountState = {
            reqURL: req.url,
            reqMethod: req.method,
            reqHeaders: req.headers,
        };
        req.on('end', () => {
            reqBody = JSON.parse(reqBody);
            accountState.body = reqBody;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(accountState));
        }); */
}).listen(8081);
