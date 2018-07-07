require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const listCtrl = require('../controllers/list_controller');

//app.use() -----> middleware that runs for EVERY request.
app.use(bodyParser.json());

// ===============ENDPOINTS====================== //

app.post('/api/list', listCtrl.create);

app.get('/api/list', listCtrl.read);

app.put('/api/list', listCtrl.update);

app.delete('/api/list', listCtrl.delete);

// ===============LISTENING======================//
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});