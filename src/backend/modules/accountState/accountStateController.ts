import { BaseController } from '../../utils/baseController';
import { AccountState } from './accountState';

export class AccountStateController extends BaseController {
    constructor(req: unknown, res: unknown) {
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
