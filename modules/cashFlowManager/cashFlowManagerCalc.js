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
    };
};
