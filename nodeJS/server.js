const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Root');
});

app.get('/profile', (req, res) => {
    res.send('Profile');
});

app.post('/profile', (req,res) => {
    console.log(req.body);
    res.send('Success');
})

app.listen(3000);