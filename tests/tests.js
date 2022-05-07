const { Logger } = require('../logger');

class Tests extends Logger {
    static moduleName = undefined;

    static passedTests = 0;
    static failedTests = 0;

    static setModuleName(name) {
        Tests.moduleName = name;
        if (Logger.loggingLevel == '[ERROR]') {
            console.log('======================================');
            console.log(`Starting ${Tests.moduleName} module tests`);
            console.log('======================================');
        }
    }

    static summaryTests() {
        const allTests = Tests.passedTests + Tests.failedTests;
        const result = (Tests.passedTests / allTests) * 100;

        if (Logger.loggingLevel == '[ERROR]') {
            console.log('\n=================================');
            console.log(`Podsumowanie testów modułu ${Tests.moduleName}`);
            console.log(`Wynik = ${result.toFixed(2)} %`);
        }
        if (Tests.failedTests) {
            process.exit(1);
        }
        process.exit(0);
    }

    static verify(testTitle, expect, result) {
        expect = Tests.changeNullAndNaNToString(expect);
        result = Tests.changeNullAndNaNToString(result);

        if (JSON.stringify(expect) === JSON.stringify(result)) {
            Tests.passedTests++;
            Logger.loggingLevel = '[INFO]';
            Logger.logInfo(`Funkcja dziala dobrze`);
        } else {
            Logger.loggingLevel = '[ERROR]';
            Tests.setModuleName(Tests.moduleName);
            console.log(`Running ${testTitle}`);
            Logger.logError(`oczekiwano: ${expect}, otrzymano ${result}`);
            Tests.failedTests++;
        }
    }

    static changeNullAndNaNToString(value) {
        if (value == null) {
            value = 'null';
        } else if (value == NaN) {
            value = 'NaN';
        }
        return value;
    }
}

module.exports = { Tests };
