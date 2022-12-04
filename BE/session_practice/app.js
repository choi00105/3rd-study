const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
}));
// 임시 - DB에 저장되어 있는 유저정도
const userInfo = {
    id: 'a',
    pw: 'a',
};

app.get('/', (req, res) =>{
    // 세션 값이 있으면, index.ejs render {isLogin: true, user: req.session.user}
    // 세션 값이 없으면, index.ejs render {isLogin: false}
    if(req.session.user) {
        res.render('index', {isLogin: true, user: req.session.user});
    } else {
        res.render('index', {isLogin: false});

    }
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', (req, res) =>{
    console.log(req.body);
    // 로그인 정보 일치 -> req.session.user 저장 -> 리다이렉트
    // 로그인 정보 불일치 -> alert -> / 경로로 이동
    console.log(userInfo);

    if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        // 홈에 입력한 아이디 == DB에서 찾은 아이디 & 입력
        req.session.user = req.body.id;
        res.redirect('/'); //로그인 후 홈화면 으로

    } else {
        res.send(
            `<script>
                alert('로그인 실패😓');
                document.location.href = '/';
            </script>`
        );
    }
    console.log('세션 생겼나 확인', Boolean(req.session.user));
    
});

app.get('/logout', (req, res) => {
    const user = req.session.user;
    console.log('GET /logout \ req.session.user >>', user);
    if (user !== undefined) {
        //req.session.destroy(callback)
        req.session.destroy((err) => {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });

    } else {
        console.log('112');
        // 유저가 브라우저에서 /logout 직접 접근
        // res.send(alert('잘못된 접근 입니다.', / 경로로 이동))
            res.send(`<script>
                alter('잘못된 접근입니다!!!');
                document.location.href = '/';
            </script>`
                );        
    }
    console.log('세션을 지운 후, req.session >> undefind 인지 확인', user);

});

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});

