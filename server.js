const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/dist/assets', express.static('./dist/assets'));

const server = http.createServer(app);
server.listen(PORT);

console.log('Server listening on port ' + PORT)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});
