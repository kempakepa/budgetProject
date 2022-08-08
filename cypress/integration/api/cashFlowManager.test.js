const {
    sendRequestToAddCostItem,
    sendRequestToAddIncomeItem,
} = require('../../services/cashFlowManagerService');

describe('cashFlowManager test', () => {
    it('should return 200 status code if add cost body parameters valid', () => {
        sendRequestToAddCostItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal('Cost added successfully');
        });
    });

    it('should return 400 status code if no amount in /addCostItem request body', () => {
        sendRequestToAddCostItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            //amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });
    it('should return 400 status code if no title in /addCostItem request body', () => {
        sendRequestToAddCostItem({
            //title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });
    it('should return 400 status code if no comment in /addCostItem request body', () => {
        sendRequestToAddCostItem({
            title: 'jabadaba',
            //comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });

    it('should return 400 status code if no date in /addCostItem request body', () => {
        sendRequestToAddCostItem({
            title: 'jabadaba',
            comment: 'mpk',
            //date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });

    it('should return 400 status code if no category in /addCostItem request body', () => {
        sendRequestToAddCostItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            //category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });

    it('should return 200 status code if add income body parameters valid', () => {
        sendRequestToAddIncomeItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.equal('Income added successfully');
        });
    });

    it('should return 400 status code if no amount in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            //amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });
    it('should return 400 status code if no title in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem({
            //title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });
    it('should return 400 status code if no comment in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem({
            title: 'jabadaba',
            //comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });

    it('should return 400 status code if no date in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem({
            title: 'jabadaba',
            comment: 'mpk',
            //date: '2022-02-01',
            amount: 3454,
            category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });

    it('should return 400 status code if no category in /addIncomeItem request body', () => {
        sendRequestToAddIncomeItem({
            title: 'jabadaba',
            comment: 'mpk',
            date: '2022-02-01',
            amount: 3454,
            //category: 'Food',
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.equal('Invalid input');
        });
    });
});
