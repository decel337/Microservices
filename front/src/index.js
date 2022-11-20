const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.static(__dirname));
app.get('/', function(request, response){
    response.sendFile('index.html', {root: __dirname});
});

app.listen(3000);
