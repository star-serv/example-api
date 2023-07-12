const express = require('express');
const morgan = require('morgan');

const transactionsRoute = require('./src/routes/transactions');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
});

app.use('/transactions', transactionsRoute);

app.listen(port, () => {
    console.log(`server listening on port `, port);
})


// different http endpoint , database mysql within docker 

