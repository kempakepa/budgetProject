const {
    hostname,
    filterBudgetItemEndpoint,
} = require('../utils/endpointsProvider');

function defineQuerryParams({ title, comment, date, amount, category }) {
    let querryParams = `title=${title}&comment=${comment}&date=${date}&amount=${amount}&category=${category}`;
    return querryParams;
}

function filterResults(title, comment, date, amount, category) {
    return cy.request({
        url: `${hostname}${filterBudgetItemEndpoint}${defineQuerryParams(
            title,
            comment,
            date,
            amount,
            category
        )}`,
        method: 'GET',
    });
}

/* function convertToFilterReqParam(reqParam0, reqParam1) {
    return `[${reqParam0},${reqParam1}]`;
}
 */
module.exports = { filterResults /* convertToFilterReqParam */ };
