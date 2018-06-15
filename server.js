const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
PORT = process.env.PORT || 7500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// app.use(express.static('app'));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});