require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING } = process.env
massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})
const app = express();
app.use(bodyParser.json());






app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))


//basic server set up for a full stack app. including the set up for a database.