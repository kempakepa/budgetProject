//main
const baseUrl = 'http://localhost:';
const port = '8081';
const urlEndpointCost = '/api/addCostItem';
const urlEndpointIncome = '/api/addIncomeItem';

const requestSent = () => {
    const reqBody = readInputelementsAndValues();
    let costOrIncome = checkIfCostOrIncome();
    if (costOrIncome) {
        addCost(reqBody, catchSubmitionMessage);
    } else {
        addIncome(reqBody, catchSubmitionMessage);
    }
};

const onCategoryChange = () => {
    let subcategoriesToShow = [
        ['Subcategory'],
        ['Biedronka', 'Lidl', 'Auchan'],
        ['Job1', 'Job2', 'Job3'],
        ['Water', 'Power', 'Gas'],
        ['Fuel', 'Service', 'Parts'],
    ];
    let optionPatternOppening = '<option value=';
    let optionPatternClosing = '</option>';
    document.getElementById('subcategories').removeAttribute('disabled');
    let option = document.getElementById('category').value;
    let takeIndex = 0;

    switch (option) {
        case '':
            document
                .getElementById('subcategories')
                .setAttribute('disabled', '');
            takeIndex = 0;
            break;
        case 'food':
            takeIndex = 1;
            break;
        case 'salary':
            takeIndex = 2;
            break;
        case 'taxes':
            takeIndex = 3;
            break;
        case 'car':
            takeIndex = 4;
            break;
        default:
            break;
    }
    let subcategories = `${optionPatternOppening}"" selected>Subcategory${optionPatternClosing}`;
    for (const valueElement of subcategoriesToShow[takeIndex]) {
        subcategories += `${optionPatternOppening}${valueElement.toLowerCase()}>${valueElement}${optionPatternClosing}`;
    }
    document.getElementById('subcategories').innerHTML = subcategories;
};
//wysylanie requesta, zlapanie response
const addCost = (param, onResponse) => {
    let request = new XMLHttpRequest();

    const url = `${baseUrl}${port}${urlEndpointCost}`;
    request.open('POST', url);

    request.responseType = 'text';

    request.onload = function () {
        if (request.readyState === request.DONE) {
            if (request.status === 200 || request.status === 400) {
                //return request.response;
                const responseBody = JSON.parse(request.responseText);
                onResponse(responseBody);
            }
        }
    };
    request.send(JSON.stringify(param));
};

const addIncome = (param, onResponse) => {
    let request = new XMLHttpRequest();

    const url = `${baseUrl}${port}${urlEndpointIncome}`;
    request.open('POST', url);

    request.responseType = 'text';

    request.onload = function () {
        if (request.readyState === request.DONE) {
            if (request.status === 200 || request.status === 400) {
                //return request.response;
                const responseBody = JSON.parse(request.responseText);
                onResponse(responseBody);
            }
        }
    };
    request.send(JSON.stringify(param));
};

//dzialanie na widoku
const checkIfCostOrIncome = () => {
    if (document.getElementById('cost').checked) {
        //const cost = document.getElementById('cost').checked;
        //console.log(typeof cost);
        return true;
    }
    return false;
};

const catchSubmitionMessage = (value) => {
    document.getElementById('submition_message').innerText = value;
};

//odczytywanie inputow/podmianka zawartosci
const readInputelementsAndValues = () => {
    return {
        title: document.getElementById('title').value,
        comment: document.getElementById('comment').value,
        date: document.getElementById('date').value,
        amount: Number(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        subcategory: document.getElementById('subcategories').value,
    };
};
