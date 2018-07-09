require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const weatherport = 3005;
const listCtrl = require('../controllers/list_controller');


//app.use() -----> middleware that runs for EVERY request.
app.use(bodyParser.json());

// ===============ENDPOINTS====================== //

app.post('/api/list', listCtrl.create);

app.get('/api/list', listCtrl.read);

app.put('/api/list', listCtrl.update);

app.put('/api/list/priority', listCtrl.updatePriority);

app.delete('/api/list', listCtrl.delete);

app.get('api.openweathermap.org', listCtrl.createweather);

// ===============LISTENING======================//
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

app.listen(weatherport, () => {
    console.log(`listening for weather on port: ${weatherport}`)
});
