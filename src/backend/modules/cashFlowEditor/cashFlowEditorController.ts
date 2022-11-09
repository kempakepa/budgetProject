import { BaseController } from '../../utils/baseController';
import { CashFlowEditor } from './cashFlowEditor';
import { ChangedCashFlowItem } from './cashFlowTypes';

export class CashFlowEditorController extends BaseController {
    constructor(req: unknown, res: unknown) {
        super(req, res);
    }

    editCashFlowItem() {
        let reqBody = '';

        this.req.on('data', (part: unknown) => {
            reqBody = reqBody + part;
        });

        this.req.on('end', () => {
            const item = JSON.parse(reqBody) as ChangedCashFlowItem;
            const cashFlowEditorResponse =
                new CashFlowEditor().editCashFlowItem(item);

            if (cashFlowEditorResponse.result === 'WRONG VALUES') {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 400;
                this.res.end();
            } else if (
                cashFlowEditorResponse.result === 'CASH FLOW ITEM DOESNT EXIST'
            ) {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 404;
                this.res.end();
            } else if (cashFlowEditorResponse.result === 'UPDATED') {
                this.res.setHeader('Access-Control-Allow-Origin', '*');
                this.res.statusCode = 200;
                this.res.end();
            }
        });
    }
}
