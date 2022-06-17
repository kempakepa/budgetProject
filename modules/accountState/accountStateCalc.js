//main
const baseUrl = 'http://localhost:';
const port = '8081';
const urlEndpoint = '/api/accountState';

const showAccountState = () => {
    //console.log('wez cos pokaz');
    //showResponse();
    getAccountState(showResponse);
};

const showResponse = (value) => {
    document.getElementById('accountState').innerText = value;
};

//wysylanie requesta, zlapanie response
const getAccountState = (onResponse) => {
    const reqObject = new XMLHttpRequest();
    reqObject.onload = () => {
        //console.log('poka poka');
        //JSON.parse(reqObject.responseText)
        const accountStateValue = JSON.parse(
            reqObject.responseText
        ).accountStateValue;
        onResponse(accountStateValue);
        //showResponse(JSON.parse(reqObject.responseText).accountStateValue);
    };

    const url = `${baseUrl}${port}${urlEndpoint}`;
    reqObject.open('GET', url);
    reqObject.send();
};

//wyswietlenie response
