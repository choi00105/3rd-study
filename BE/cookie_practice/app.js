const express = require('express');
const cookieParser = require('cookie-parser');
// cookie-parser - 요청의 쿠키를 해석해서 req.cookie 객체로 만듬
// ex) name-heiio라는 쿠키를 보내면, req.cookies -> {name: 'hello'}
// 유효기간이 지난 쿠키는 알아서 제거
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); // req.cookies 가능해짐

const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
    maxAge: 60*1000, // 밀리초 기반 유효시간 설정 (시간 기반으로 유효기간 설정)
    // expires: 만료 날짜 설정 (날짜 기반으로 유효기간 설정)
    // secure: https 에서만 쿠키 접근
    // signed: 쿠키 암호화
}

app.get('/', (req, res) => {
    res.render('index', {popup: req.cookies.popup});
});

app.post('/setCookie', (req, res) => {
    res.cookie('popup', 'hide', cookieConfig); // 쿠키 설정
    res.send('cookie 설정 완료~'); // 응답을 보냄
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
