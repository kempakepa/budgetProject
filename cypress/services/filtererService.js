const {
    hostname,
    filterBudgetItemEndpoint,
} = require('../utils/endpointsProvider');

function defineQuerryParams({
    title,
    comment,
    date,
    amount,
    category,
    subcategory,
}) {
    let querryParams = `title=${title}&comment=${comment}&date=${date}&amount=${amount}&category=${category}&subcategory=${subcategory}`;
    return querryParams;
}

function filterResults(title, comment, date, amount, category, subcategory) {
    return cy.request({
        url: `${hostname}${filterBudgetItemEndpoint}${defineQuerryParams(
            title,
            comment,
            date,
            amount,
            category,
            subcategory
        )}`,
        method: 'GET',
    });
}

/* function convertToFilterReqParam(reqParam0, reqParam1) {
    return `[${reqParam0},${reqParam1}]`;
}
 */
module.exports = { filterResults /* convertToFilterReqParam */ };
