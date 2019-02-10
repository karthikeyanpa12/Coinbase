const express = require('express');
const app = express();
var cors = require('cors')

const products = require('./routes/products.json');
const stats = require('./routes/stats.json');

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send(products);
})

app.get('/products/', (req, res) => {
    res.send(products);
})

app.get('/products/:id/stats', (req, res) => {
    res.send(stats);
})

app.listen(port, (err) => {
    if (err) { console.log(err) };
    console.log('Listening on port ' + port);
})

app.get('*', (req, res) => {
    res.end('Hello Express');
});