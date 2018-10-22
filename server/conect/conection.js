var pg = require('pg');
var params = { host: 'ec2-184-73-197-211.compute-1.amazonaws.com', user: 'rxitzefkjqfpcs', password: 'ae39133a3623c7d1eb467bb1b8e61a25d2a45bed0d8a0b9d449a2b2621a1d7ab', database: 'dbhirrcf5osbq5', ssl: true };
var client = new pg.Client(params);

client.connect((err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('Bd is conected');
    }

});

module.exports = client;