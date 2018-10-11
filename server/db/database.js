const mongoose = require('mongoose'); 
const URI = 'mongodb://banco:asd$123@ds229373.mlab.com:29373/banco-interamericano'; 

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err)
    );
module.exports = mongoose; 