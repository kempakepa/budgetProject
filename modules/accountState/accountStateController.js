const { BaseController } = require('../../utils/baseController');
const { AccountState } = require('./accountState');

class AccountStateController extends BaseController {
    constructor(req, res) {
        super(req, res);
    }
    getAccountState() {
        const accountState = {
            accountStateValue: AccountState.getAccountState(),
        };
        this.res.setHeader('Access-Control-Allow-Origin', '*');
        this.res.setHeader('Content-Type', 'application/json');
        this.res.statusCode = 200;
        this.res.end(JSON.stringify(accountState));
    }
}

module.exports = { AccountStateController };
