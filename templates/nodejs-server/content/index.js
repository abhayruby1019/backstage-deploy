const express = require('express');
const promethues = require('express-prom-bundle');

const appName = "${{ values.name }}";


const app = express();

const metrics = promethues({
    includeStatusCode: true,
    includeMethod: true,
    includePath: true,
    customLabels: {
        app: appName
    }
});
app.use(metrics);

app.get('/api/v1/hello', (req, res) => {
    const { name = 'world' } = req.query;
    res.send(`Hello, ${name}!`);
});


const port = ${{ values.serverPort }};

app.listen(port, () => {
    console.log(`${appName} listening on ${port}`);
});