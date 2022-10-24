class Helpers {
    reqURLParam = [];
    reqURLParamParsed = [];

    pushReqStringParams(reqURL) {
        for (let el of reqURL) {
            this.reqURLParam.push(el);
        }
    }

    splitReqURLParam(element) {
        let regParamSplit = element.split('=');
        return regParamSplit[1];
    }

    decodeAndSlice(element) {
        let elementDecoded = decodeURIComponent(
            element.slice(1, element.length - 1)
        ).split(',');
        return elementDecoded;
    }

    parseReqURLParams() {
        this.reqURLParam.filter((element) => {
            if (element.includes('undefined')) {
                this.reqURLParamParsed.push(undefined);
            } else if (element.includes('date=[')) {
                element = this.splitReqURLParam(element);
                element = this.decodeAndSlice(element);
                this.reqURLParamParsed.push([
                    element[0].trim(),
                    element[1].trim(),
                ]);
            } else if (element.includes('amount=[')) {
                element = this.splitReqURLParam(element);
                element = this.decodeAndSlice(element);
                this.reqURLParamParsed.push([
                    parseInt(element[0], 10),
                    parseInt(element[1], 10),
                ]);
            } else {
                element = this.splitReqURLParam(element);
                this.reqURLParamParsed.push(element);
            }
        });
    }
}

module.exports = { Helpers };
