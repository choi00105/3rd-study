const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain'); // controlloer 파일을 사용할수 있게함

// 이 파일이 하는 일은 '경로 설정'만 = 라우팅
// 기본 경로: localhost:PORT/

//GET => localhost:PORT/
router.get('/', controller.main);

// GET /comments - 댓글 전체 목록 확인 가능
// localhost:PORT/comments
router.get('/comments', controller.comments);

// GET / comment/:id - 각 댓글 자체를 
// localhost:PORT/comment/:id
router.get('/comment/:id', controller.comment);
// modul.exports 를 통새서 router 등록
// -> 다른 파일에서도 사용 가능
module.exports = router;