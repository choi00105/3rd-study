const express = require('express');
const app = express(); //app에 express 실행
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    // res.send('hello');
    res.render('index.html');
});

app.listen(PORT, function (){
    console.log(`http://localhost:${PORT}`);
});