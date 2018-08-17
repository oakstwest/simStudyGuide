const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance);

       // dbInstance.new_Food()
            //.then(Food => console.log(Food))
            //.catch( err => console.log( err ));

        //dbInstance.get_Food()
            //.then(Food=> console.log(Food))
            //.catch(err => console.log(err))
});

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/Food', controller.getFood)

const port = process.env.PORT || 3005
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );


//basic server set up for a full stack app. including the set up for a database.