const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

//app.use() -----> middleware that runs for EVERY request.
app.use(bodyParser.json());

// ===============ENDPOINTS====================== //

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});