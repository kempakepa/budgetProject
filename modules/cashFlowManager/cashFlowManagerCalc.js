//main
const baseUrl = 'http://localhost:';
const port = '8081';
const urlEndpointCost = '/api/addCostItem';
const urlEndpointIncome = '/api/addIncomeItem';

const requestSent = () => {
    const reqBody = readInputelementsAndValues();
    let costOrIncome = checkIfCostOrIncome();
    if (costOrIncome) {
        addCost(reqBody);
    } else {
        addIncome(reqBody);
    }
    console.log(reqBody);
};
//wysylanie requesta, zlapanie response
const addCost = (param) => {
    let request = new XMLHttpRequest();

    const url = `${baseUrl}${port}${urlEndpointCost}`;
    request.open('POST', url);
    request.send(JSON.stringify(param));
};

const addIncome = (param) => {
    let request = new XMLHttpRequest();

    const url = `${baseUrl}${port}${urlEndpointIncome}`;
    request.open('POST', url);
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
