const express = require('express');
const NotionController = require('./controllers/NotionController');

const app = express();
app.use(express.json());

app.post('/create', NotionController.createRecord);
app.get('/retrieve/:id', NotionController.getRecord);
app.patch('/update/:id', NotionController.updateRecord);
app.delete('/delete/:id', NotionController.deleteRecord);

module.exports = app;