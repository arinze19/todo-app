var express = require('express');
var app = express();
var port = 3000;


app.get('/', function (req, res){
    res.status(200).send('Hello World');
});
app.get('/winter', function (req, res){
    res.status(404).send('Page not found');
});

app.listen(port, function(){
    console.log('server is running in on port ' + port)
})