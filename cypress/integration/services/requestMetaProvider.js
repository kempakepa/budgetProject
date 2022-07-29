function accountStateMetaProvider() {
    return {
        url: 'http://localhost:8081/api/accountState',
        method: 'GET',
    };
}

function addCostItemMetaProvider(body, failOnStatusCode) {
    return {
        url: 'http://localhost:8081/api/addCostItem',
        method: 'POST',
        body: body,
        failOnStatusCode: failOnStatusCode,
    };
}

function addIncomeItemMetaProvider(body, failOnStatusCode) {
    return {
        url: 'http://localhost:8081/api/addIncomeItem',
        method: 'POST',
        body: body,
        failOnStatusCode: failOnStatusCode,
    };
}

module.exports = {
    accountStateMetaProvider,
    addCostItemMetaProvider,
    addIncomeItemMetaProvider,
};
