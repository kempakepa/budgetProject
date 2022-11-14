let http = require('http');
const { endpoints } = require('./rooting');

const port = 8081;

const routing = (req, res) => {
    if (
        endpoints.find(
            (endpoint) =>
                endpoint.url === req.url && endpoint.method === req.method
        )
    ) {
        endpoints
            .find(
                (endpoint) =>
                    endpoint.url === req.url && endpoint.method === req.method
            )
            .controller(req, res);
    } else if (
        endpoints.find(
            (endpoint) =>
                req.url.startsWith('/api/filterBudgetItem') &&
                endpoint.method === req.method
        )
    ) {
        endpoints
            .find(
                (endpoint) =>
                    endpoint.url.startsWith('/api/filterBudgetItem') &&
                    endpoint.method === req.method
            )
            .controller(req, res);
    } else {
        console.log('Nie ma takiego endpointa', req.url);
        res.statusCode = 404;
        res.end();
    }
};
http.createServer(routing).listen(port);
