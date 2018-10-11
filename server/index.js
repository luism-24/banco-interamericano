const express = require('express');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./db/database'); 

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares 
app.use(morgan('dev'));
app.use(express.json());

// Routes
const routes = require('./routes/routes');
app.use(routes); 

//Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});