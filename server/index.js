const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares 
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Routes
const routes = require('./routes/routes');
app.use('/banco-interamericano', routes);

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});