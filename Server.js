const express = require('express')
const app = express()
app.use(express.json());

const getItems = require('./controllers/getItems');
const postItems = require('./controllers/postItems');


let bills = [];

app.get('/', (req, res) => res.send("GET /items: returns a list of medical bills <br/> POST /items: creates a new medical bill"))

app.get('/items', (req, res) => getItems.handleGetItems(req, res, bills));

app.post('/items', (req, res) => postItems.handlePostItems(req, res, bills));

app.listen(3000, () => console.log('App is listening on port 3000!'))