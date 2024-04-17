'use strict'

const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet())

app.get('/', (req, res) => {
    console.log('route \'/\' called!') //This logs a message to the console indicating that the root route has been accessed.
    res.send({res: 'Sending 200 as response'})
});

app.listen(4000)
console.log('Express app is up and running on port 3000!')