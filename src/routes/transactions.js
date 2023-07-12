const express = require('express');
const router = express.Router();

//dummy data
const SAMPLE_DATA = [
    {id: 1, name: 'yogurt', merchant: 'costco', cost: 11.99, date: new Date("01/01/2000").toDateString()},
    {id: 2, name: 'gas', merchant: 'speedway', cost: 35.01, date: new Date("01/02/2000").toDateString()},
    {id: 3, name: 'pokemon', merchant: 'nintendo', cost: 59.99, date: new Date("01/03/2001").toDateString()},
    {id: 4, name: 'banh mi', merchant: 'mr banh mi', cost: 12.99, date: new Date("01/03/2001").toDateString()}
];

router.get('/', (req, res) => {
    res.json({ 'message': 'transactions ok' })
});

router.get('/all', (req, res) => {
    res.json({'transactions': SAMPLE_DATA});
});

router.get('/:id', (req, res) => {
    let lookup_id = req.params.id;
    let item = SAMPLE_DATA.find( item => item.id == lookup_id) ? SAMPLE_DATA.find( item => item.id == lookup_id) : {'message': 'no item found'};
    res.json(item);
});


module.exports = router;