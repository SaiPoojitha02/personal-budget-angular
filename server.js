const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 25
        },
        {
            title: 'Grocery',
            budget: 50
        },
    ]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
const json = fs.readFileSync('Categories.json', 'utf8');
const Data = JSON.parse(json);
app.get('/budget', (req, res) => {
    res.json(Data);
});


app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});