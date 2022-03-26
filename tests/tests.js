let moduleName = undefined;

let passedTests = 0;
let failedTests = 0;

function setModuleName(name) {
    moduleName = name;

    console.log('======================================');
    console.log(`Starting ${moduleName} module tests`);
    console.log('======================================');
}

function verify(testTitle, expect, result) {
    console.log(`Running ${testTitle}`);

    expect = changeNullAndNaNToString(expect);
    result = changeNullAndNaNToString(result);

    if (JSON.stringify(expect) === JSON.stringify(result)) {
        console.log('Funkcja dziala dobrze');
        passedTests++;
    } else {
        console.log(`[ERROR] oczekiwano: ${expect}, otrzymano ${result}`);
        failedTests++;
    }
}

function summaryTests() {
    const allTests = passedTests + failedTests;
    const result = (passedTests / allTests) * 100;

    console.log('\n\n=================================');
    console.log(`Podsumowanie testów modułu ${moduleName}`);
    console.log(`Wynik = ${result.toFixed(2)} %`);

    if (failedTests) {
        process.exit(1);
    }
    process.exit(0);
}

function changeNullAndNaNToString(value) {
    if (value == null) {
        value = 'null';
    } else if (value == NaN) {
        value = 'NaN';
    }
    return value;
}

module.exports = { verify, setModuleName, summaryTests };
