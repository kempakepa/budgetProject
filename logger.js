class Logger {
    static loggingLevel;
    static logInfo(text) {
        if (Logger.loggingLevel == '[INFO]') {
            Logger.log(text, '[INFO]');
        }
    }

    static logWarning(text) {
        if (
            Logger.loggingLevel == '[WARNING]' ||
            Logger.loggingLevel == '[INFO]'
        ) {
            Logger.log(text, '[WARNING]');
        }
    }

    static logError(text) {
        Logger.log(text, '[ERROR]');
    }

    static log(text, logLevel) {
        if (Logger.loggingLevel == '[ERROR]') {
            const date = new Date();
            console.log(
                `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}][${logLevel}]: ${text}`
            );
        }
    }
}

//Logger.loggingLevel = "ERROR";
/* Logger.logInfo("jakis text info");
  Logger.logWarning("jakis text warning");
  Logger.logError("jakis text error"); */

module.exports = { Logger };
