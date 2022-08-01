const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');

describe('cashFlowManager test', () => {
    it('should return 200 status code if add cost body parameters valid', () => {
        sendRequestToAddCostItem(
            {
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 3454,
                category: 'Food',
            },
            true
        ).then((response) => {
            expect(response.status).to.equal(200);
        });
    });

    it('should return 400 status code if no amount in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            {
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                //amount: 3454,
                category: 'Food',
            },
            false
        ).then((response) => {
            expect(response.status).to.equal(400);
        });
    });
    it('should return 400 status code if no title in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            {
                //title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 3454,
                category: 'Food',
            },
            false
        ).then((response) => {
            expect(response.status).to.equal(400);
        });
    });
    it('should return 400 status code if no comment in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            {
                title: 'jabadaba',
                //comment: 'mpk',
                date: '2022-02-01',
                amount: 3454,
                category: 'Food',
            },
            false
        ).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it('should return 400 status code if no date in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            {
                title: 'jabadaba',
                comment: 'mpk',
                //date: '2022-02-01',
                amount: 3454,
                category: 'Food',
            },
            false
        ).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it('should return 400 status code if no category in /addCostItem request body', () => {
        sendRequestToAddCostItem(
            {
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 3454,
                //category: 'Food',
            },
            false
        ).then((response) => {
            expect(response.status).to.equal(400);
        });
    });
});
