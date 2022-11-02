const express = require('express');
const app = express();
const PORT = 8000;
const id='kim';
const pw='4321';
app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.render('index', {title1: '동적 폼 실습 29-30'});
});

// 2. axios GET axios
app.get('/axios', function (req, res){
    console.log(req.query);
    res.send(req.query);
});

app.post('/axios', function (req, res){
    console.log(req.body);
    if(req.body.id==id && req.body.password==pw){
        console.log('로그인 성공')
        res.send({info: req.body, msg:  `${req.body.id}님! 로그인 성공`, color: 'blue'});
    }else {
        console.log('로그인 실패')
        res.send({info: req.body, msg: '아이디 또는 패스워드 오류', color: 'red'})
    }
});


app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});

