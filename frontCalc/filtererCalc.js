//main
const baseUrl = 'http://localhost:';
const port = '8081';

const requestSent = () => {
    //defineQuerryParams();
    getResultsFiltered(showResultsFiltered);
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

const defineQuerryParams = () => {
    let title = readInputelementsAndValues().title;
    let comment = readInputelementsAndValues().comment;
    let date = readInputelementsAndValues().date;
    let amount = readInputelementsAndValues().amount;
    let category = readInputelementsAndValues().category;
    let subcategory = readInputelementsAndValues().subcategory;
    /* const urlFilterer = `/api/filterBudgetItem?title=${
                readInputelementsAndValues().title
            }&comment=${readInputelementsAndValues().comment}&date=[${
                readInputelementsAndValues().date
            }]&amount=[${readInputelementsAndValues().amount}]&category=${
                readInputelementsAndValues().category
            }`; */

    //pierwsza wersja
    if (title == '') {
        title = undefined;
    }
    if (comment == '') {
        comment = undefined;
    }
    if (date[0] == '' || date[1] == '') {
        date = undefined;
    } else {
        date = `[${date[0]},${date[1]}]`;
    }
    if (amount[0] == '' || amount[1] == '') {
        amount = undefined;
    } else {
        amount = `[${amount[0]},${amount[1]}]`;
        console.log(amount);
    }
    if (category == '') {
        category = undefined;
    }
    if (subcategory == '') {
        subcategory = undefined;
    }

    const urlFilterer = `/api/filterBudgetItem?title=${title}&comment=${comment}&date=${date}&amount=${amount}&category=${category}&subcategory=${subcategory}`;
    //console.log(readInputelementsAndValues());
    //console.log(title, comment, date, amount, category, urlFilterer);
    return urlFilterer;
};

const showResultsFiltered = (value) => {
    showIncomesAndCostsList(value);
    showFiltererBalancerData(value);
};

const showIncomesAndCostsList = (data) => {
    let showValueElement = '';
    for (const valueElement of data) {
        showValueElement += `<li>${valueElement}</li>`;
    }
    document.getElementById('showlist').innerHTML = showValueElement;
};

const showFiltererBalancerData = (data) => {
    const incomes = data.filter((dataRow) => dataRow[3] > 0);
    const incomesSum = incomes.reduce((acc, object) => acc + object[3], 0);

    const costs = data.filter((dataRow) => dataRow[3] < 0);
    const costsSum = costs.reduce(
        (acc, object) => acc + Math.abs(object[3]),
        0
    );

    const balance = incomesSum - costsSum;

    document.querySelector('[data-cy="incomeSummary"]').innerText = incomesSum;
    document.querySelector('[data-cy="costSummary"]').innerText = costsSum;
    document.querySelector('[data-cy="balanceSummary"]').innerText = balance;
};

//odczytywanie parametrow requesta
const readInputelementsAndValues = () => {
    return {
        title: document.getElementById('title').value,
        comment: document.getElementById('comment').value,
        date: [
            document.getElementById('min-date').value,
            document.getElementById('max-date').value,
        ],
        amount: [
            Number(document.getElementById('min-amount').value),
            Number(document.getElementById('max-amount').value),
        ],
        category: document.getElementById('category').value,
        subcategory: document.getElementById('subcategories').value,
    };
};

//wysylanie requesta, zlapanie response
const getResultsFiltered = (onResponse) => {
    const reqObject = new XMLHttpRequest();
    reqObject.onload = () => {
        const filtered = JSON.parse(reqObject.responseText);
        onResponse(filtered);
    };

    const url = `${baseUrl}${port}${defineQuerryParams()}`;
    reqObject.open('GET', url);
    reqObject.send();
};
