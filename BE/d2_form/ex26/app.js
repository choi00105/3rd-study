const express = require('express');
const app = express(); //app에 express 실행
const PORT = 8000;

//views 설정
app.set('view engine', 'ejs');
// 미들웨어 설정 : 요청(req)와 응답(res) 중간에서 작업
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());//  json 형태로 데이터를 전달받음

//Routing - 경로설정
// - req(request) : 요청 (클라이언트 -> 서버)
// - res(response) : 응답 (서버 -> 클라이언트)
app.get('/', function (req, res) { //get 요청이 루트경로(/)로 들어옴 -> http://localhost:PORT
    // res.send('hello');
    res.render('ex26-27'); //views/index.ejs 파일을 찾아서 클라이언트에게 "응답"
});
app.get('/getForm', function (req, res) {
    console.log(req.query);
    // res.send('get 요청 응답 성공');
    res.render('result', {title: 'GET 요청 성공!', userInfo: req.query});

});
app.post('/postForm', function(req, res){
    console.log(req.body);
    // res.send('post 요청 응답 성공');
    res.render('result', {title: 'POST 요청 성공~', userInfo: req.body});
});
app.listen(PORT, function (){
    console.log(`http://localhost:${PORT}`);
});