const express = require('express');
let path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`) );

let PORT = 3000;
app.listen(PORT, function(){
    console.log('listening on port');
});