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

const cashFlowEditorOnEdit = () => {};

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
    document.getElementById('title').value = values[1];
    document.getElementById('comment').value = values[2];
    document.getElementById('date').value = values[3];
    document.getElementById('amount').value = Math.abs(values[4]);
    document.getElementById('category').options[
        getCategoryInputIndex(values[5])
    ].selected = 'selected';
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
