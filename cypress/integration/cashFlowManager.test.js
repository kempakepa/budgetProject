describe('cashFlowManager test', () => {
    it('should return 200 status code', () => {
        cy.request({
            url: 'http://localhost:8081/api/addCostItem',
            method: 'POST',
            body: {
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                amount: 3454,
                category: 'Food',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    });

    it('should return 400 status code', () => {
        cy.request({
            url: 'http://localhost:8081/api/addCostItem',
            method: 'POST',
            body: {
                title: 'jabadaba',
                comment: 'mpk',
                date: '2022-02-01',
                //amount: 3454,
                category: 'Food',
            },
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });
});
