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
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(title, undefined, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.not.equal(0);
            }
        );
    });

    it('should return one array element by valid exact comment filter', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(undefined, comment, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.not.equal(0);
            }
        );
    });

    it('should return one array element by valid exact category filter', () => {
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
            category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid date range filter', () => {
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
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid amount range filter', () => {
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
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid title uppercased filter', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by valid comment uppercased filter', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            undefined,
            comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
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
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, comment)', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(title, comment, undefined, undefined, undefined).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.not.equal(0);
            }
        );
    });

    it('should return one array element by 2 valid filter criteria (title, date)', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title,
            undefined,
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, amount)', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title,
            undefined,
            undefined,
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category)', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(title, undefined, undefined, undefined, category).then(
            (response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.not.equal(0);
            }
        );
    });

    it('should return one array element by 2 valid filter criteria (title, comment) to uppercase', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title.toUpperCase(),
            comment.toUpperCase(),
            undefined,
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, date) to uppercase', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title.toUpperCase(),
            undefined,
            convertToFilterReqParam(date),
            undefined,
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, amount) to uppercase', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            convertToFilterReqParam(amount),
            undefined
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });

    it('should return one array element by 2 valid filter criteria (title, category) to uppercase', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title.toUpperCase(),
            undefined,
            undefined,
            undefined,
            category.toUpperCase()
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
    it('should return one array element by all valid filter criteria', () => {
        sendRequestToAddCostItem({
            title: title,
            comment: comment,
            date: date,
            amount: amount,
            category: category,
        });
        filterResults(
            title,
            comment,
            convertToFilterReqParam(date, date),
            convertToFilterReqParam(amount, amount),
            category
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.not.equal(0);
        });
    });
});
