const {
    sendRequestToAddCostItem,
} = require('../../services/cashFlowManagerService');
const {
    filterResults,
    convertToFilterReqParam,
} = require('../../services/filtererService');
const {
    title,
    comment,
    date,
    amount,
    category,
} = require('../../utils/testDataProvider');

describe('filterer test', () => {
    it('should return empty array', () => {
        filterResults(
            'dsefe',
            'dsefe',
            ['dsefe', 'dsefe'],
            [0, 0],
            'dsefe'
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.to.deep.equal([]);
        });
    });

    it('should return +one in count array element', () => {
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            let responseLength = response.body.length;
            expect(response.status).to.equal(200);

            sendRequestToAddCostItem({
                title: title,
                comment: comment,
                date: date,
                amount: amount,
                category: category,
            });
            filterResults(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            ).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(responseLength + 1);
            });
        });
    });

    it('should return one array element by valid exact title filter', () => {
        filterResults(title, undefined, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(1);
            }
        );
    });

    it('should return one array element by valid exact comment filter', () => {
        filterResults(undefined, comment, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(1);
            }
        );
    });

    it('should return one array element by valid exact category filter', () => {
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by valid date range filter', () => {
        cy.log(typeof date);
        filterResults(
            undefined,
            undefined,
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by valid amount range filter', () => {
        cy.log(typeof amount, amount);
        filterResults(
            undefined,
            undefined,
            undefined,
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by valid title uppercased filter', () => {
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by valid comment uppercased filter', () => {
        filterResults(
            undefined,
            comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by valid category uppercased filter', () => {
        filterResults(
            undefined,
            undefined,
            undefined,
            undefined,
            category.toUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, comment)', () => {
        filterResults(title, comment, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(1);
            }
        );
    });

    it('should return one array element by 2 valid filter criteria (title, date)', () => {
        filterResults(
            title,
            undefined,
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, amount)', () => {
        filterResults(
            title,
            undefined,
            undefined,
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category)', () => {
        filterResults(title, undefined, undefined, undefined, category).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(1);
            }
        );
    });

    it('should return one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        filterResults(
            title.toUpperCase(),
            comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        filterResults(
            title.toUpperCase(),
            undefined,
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            category.toUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(1);
        });
    });
});
