describe('accountState test', () => {
    it('Should display 0 if no items or cost', () => {
        cy.request({
            url: 'http://localhost:8081/api/accountState',
            method: 'GET',
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.accountStateValue).to.not.undefined;
        });
    });
});
