class Helpers {
    static reqURLParam = [];

    static splitAndPushReqURLParams(reqURL) {
        for (let el of reqURL) {
            let reqParams = el.split('=');
            Helpers.reqURLParam.push(reqParams.pop());
            //console.log(Helpers.reqURLParam);
        }
    }

    /* decodeAndSlice() {
        return decodeURIComponent(
            Helpers.reqURLParam.slice(1, Helpers.reqURLParam.length - 1)
        ).split(',');
    } */

    static parseReqURLParams() {
        /* Helpers.reqURLParam.filter((element) => {
            if (element == 'undefined') {
                element = undefined;
            } else if (element.includes('[') && element.includes('-')) {
                element = this.decodeAndSlice();
                element = [element[0].trim(), element[1].trim()];
            } else if (element.includes('[') && !element.includes('-')) {
                element = this.decodeAndSlice();
                element = [parseInt(element[0], 10), parseInt(element[1], 10)];
            }
        }); */

        for (let i = 0; i < Helpers.reqURLParam.length; i++) {
            if (Helpers.reqURLParam[i] == 'undefined') {
                Helpers.reqURLParam[i] = undefined;
            } else if (
                Helpers.reqURLParam[i].includes('[') &&
                Helpers.reqURLParam[i].includes('-')
            ) {
                Helpers.reqURLParam[i] = decodeURIComponent(
                    Helpers.reqURLParam[i].slice(
                        1,
                        Helpers.reqURLParam[i].length - 1
                    )
                ).split(',');
                Helpers.reqURLParam[i] = [
                    Helpers.reqURLParam[i][0].trim(),
                    Helpers.reqURLParam[i][1].trim(),
                ];
            } else if (
                Helpers.reqURLParam[i].includes('[') &&
                !Helpers.reqURLParam[i].includes('-')
            ) {
                Helpers.reqURLParam[i] = decodeURIComponent(
                    Helpers.reqURLParam[i].slice(
                        1,
                        Helpers.reqURLParam[i].length - 1
                    )
                ).split(',');

                Helpers.reqURLParam[i] = [
                    parseInt(Helpers.reqURLParam[i][0], 10),
                    parseInt(Helpers.reqURLParam[i][1], 10),
                ];
            }
        }
    }
}

module.exports = { Helpers };
