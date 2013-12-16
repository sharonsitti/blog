var express = require('express'),
    app = express();


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen();
console.log('Express server started on port %s', 4000);