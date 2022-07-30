const { CashFlowManagerObject } = require('../../POP/cashFlowManagerObject');
const { HomePageObject } = require('../../POP/homePageObject');

describe('cashFlowManager tests', () => {
    it('addCost tests - valid input', () => {
        HomePageObject.visitHomePage();
        HomePageObject.goToCashFlowManagerModule();
        CashFlowManagerObject.addCost({
            title: 'title',
            comment: 'comment',
            date: '2022-02-02',
            amount: 100,
            category: 'Food',
        });
        /* CashFlowManagerObject.selectCost();
        CashFlowManagerObject.insertTitle('title');
        CashFlowManagerObject.insertComment('comment');
        CashFlowManagerObject.insertDate('2022-07-30');
        CashFlowManagerObject.insertAmount(100);
        CashFlowManagerObject.insertCategory('category');
        CashFlowManagerObject.submitCashFlowManagerForm(); */
    });
});
