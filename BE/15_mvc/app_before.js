const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//임시) DB로 부터 댓글 목록을 받아옴
// 배열 : 전체 댓글
// 각 객체 : 댓글 하나
const comments = [{
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요 ^~^',
}, {
    id: 2,
    userid: 'hello',
    date: '2022-11-31',
    comment: '안녕하이여~',
}, {
    id: 3,
    userid: 'world',
    date: '2022-08-11',
    comment: '오신기하군',
}, {
    id: 4,
    userid: 'bset',
    date: '2022-01-05',
    comment: '4번 댓글^^',
}]

// 함수선언 
//1. 명시적 함수 선언

app.get('/', function (req, res){
    res.render('index');
});

// GET /comments - 댓글 전체 목록 확인 가능
app.get('/comments', (req, res) => {
    console.log(comments);
    res.render('comments', {commentInfos: comments});
});

// GET / comment/:id - 각 댓글 자체를 
app.get('/comment/:id', (req,res) => {
    console.log(req.params);// 라우트 매개변수(:id)에 대한 정보 담겨있음
    console.log(req.params.id);// id(위 변수 명)값 추출

    const commentId = req.params.id;// 댓글 id: url로 들어온 변수
    
    console.log(comments[commentId - 1]); //댓글 목록에서 특정 댓글 정보 추출

    res.render('comment', { commentInfo: comments[commentId - 1]});
    // 1. :id - 존재하지 않는 댓글의 id x (0, 음수, 배열 길이보다 큰 값)
    if (commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }
    // 2. 숫자가 아닌것이 들어오면 안됨
    if (isNaN(commentId)){
        return res.render('404');
    }
});
// 404 ERROR
// 맨 마지막에 라우트로 선언해야함
// 그렇지 않으면 나머지 코드 무시된
app.get('*', (req,res) => {
    res.render('404');
});

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});