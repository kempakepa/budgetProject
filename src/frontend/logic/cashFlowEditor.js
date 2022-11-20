//MAIN
const baseUrl = 'http://localhost:';
const port = '8081';

const cashFlowEditorOnLoad = () => {
    const cashFlowItemId = readCashFlowItemId();
    loadCashFlowItem((response) => {
        const cashFlowItem = response.find(
            (item) => item[0] === cashFlowItemId
        );
        setFormInitValues(cashFlowItem);
    });
};

const cashFlowEditorOnEdit = () => {
    const body = readInputValues();
    sendEditFlowPutRequeset(body, redirectToFilteringView);
};

//VIEW
const readCashFlowItemId = () => {
    const url = window.location.href;
    const urlSplitted = url.split('?');

    if (urlSplitted.length != 2) {
        throw 'Wrong view parameters';
    }

    const urlParams = urlSplitted[1].split('=');

    if (urlParams.length != 2) {
        throw 'Wrong view parameters';
    }

    if (urlParams[0] != 'id') {
        throw 'Wrong parameter name';
    }

    if (!Number(urlParams[1])) {
        throw 'Wrong parameter value';
    }

    return Number(urlParams[1]);
};

const setFormInitValues = (values) => {
    const isCost = values[4] < 0;

    if (isCost) {
        document.getElementById('cost').setAttribute('checked', '');
    } else {
        document.getElementById('income').setAttribute('checked', '');
    }

    getHiddenIdElement().value = values[0];
    getTitleElement().value = values[1];
    getCommentElement().value = values[2];
    getDateElement().value = values[3];
    getAmountElement().value = Math.abs(values[4]);
    getCategoryElement().options[getCategoryInputIndex(values[5])].selected =
        'selected';
};

const costOrInput = () => {
    if (getCostTypeElement().checked) {
        return 'COST';
    }
    if (getIncomeTypeElement().checked) {
        return 'INCOME';
    }
};

const readInputValues = () => {
    return {
        amount: Number(getAmountElement().value),
        cashFlowType: costOrInput(),
        category: getCategoryElement().value,
        comment: getCommentElement().value,
        date: getDateElement().value,
        title: getTitleElement().value,
        id: getHiddenIdElement().value,
    };
};

const redirectToFilteringView = () => {
    const currentUrl = window.location.href;
    const splitUrl = currentUrl.split('/views/');
    const newUrl = `${splitUrl[0]}/views/filterer.html`;
    window.location.replace(newUrl);
};

const getTitleElement = () => {
    return document.getElementById('title');
};

const getCommentElement = () => {
    return document.getElementById('comment');
};

const getDateElement = () => {
    return document.getElementById('date');
};

const getAmountElement = () => {
    return document.getElementById('amount');
};

const getCategoryElement = () => {
    return document.getElementById('category');
};

const getCostTypeElement = () => {
    return document.getElementById('cost');
};

const getIncomeTypeElement = () => {
    return document.getElementById('income');
};

const getHiddenIdElement = () => {
    return document.getElementById('id');
};

//LOGIC
const getCategoryInputIndex = (categoryValue) => {
    const categories = [
        { id: 0, name: 'category' },
        { id: 1, name: 'food' },
        { id: 2, name: 'salary' },
        { id: 3, name: 'taxes' },
        { id: 4, name: 'car' },
    ];
    return categories.find(
        (category) => category.name === categoryValue.toLowerCase()
    ).id;
};

//SERVICE
const loadCashFlowItem = (onResponse) => {
    const reqObject = new XMLHttpRequest();
    reqObject.onload = () => {
        const response = JSON.parse(reqObject.responseText);
        onResponse(response);
    };

    const url = `${baseUrl}${port}/api/costAndIncomes`;
    reqObject.open('GET', url);
    reqObject.send();
};

const sendEditFlowPutRequeset = (body, onResponse) => {
    const reqObject = new XMLHttpRequest();

    const url = `${baseUrl}${port}/api/editCashFlow`;
    reqObject.open('POST', url);
    reqObject.responseType = 'text';

    reqObject.onload = () => {
        onResponse();
    };

    reqObject.send(JSON.stringify(body));
};

module.exports = { cashFlowEditorOnLoad, cashFlowEditorOnEdit };
