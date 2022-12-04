const express = require('express');
const { send } = require('process');
const { Socket } = require('socket.io');
const app = express();
// Socket은 express가 아니 http 모둘에 연결해야 사용가능
const http = require('http').Server(app);
const io = require('socket.io')(http); // http-socket 연결
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('chat');
});

const nickArray = {}; //유져 목록

// io.on : socket과 관련된 통신 작업을 표시
io.on('connection', (socket) => {
    // "connection" event
    // : 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공!
    console.log('*****🐵 server Socket Conneted >>>', socket.id);
    // socket.id : socket 고유 아이디 -> socket은 웹 페이지 별로 생김


    // // 실습 42
    // socket.on('hello', (data) => {
    //     // console.log('socket on hello >> ', data);
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!@@'});
    // });
    
    // socket.on('study', (data) => {
    //     // console.log('socket on study >> ', data);
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('studyKr', { who: 'study', msg: '공부!!@@'});
    //     console.log('보냄');
    // });
    // socket.on('bye', (data) => {
    //     // console.log('socket on bye >> ', data);
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('byeKr', { who: 'bye', msg: '잘가!!@@'});
    // });

    // 실습 44 채팅창 입장 안내 문구 출력
    // io.emit('notice', `${socket.id.slice(0,5)}님이 입장하셨습니다.`)    

    // 실습 44-2 채팅방 입장 안내 문구
    socket.on('setNick', (nick) => {
        console.log('socket on setNick >>', nick);
        // nickArray: {socketId1: nick1, socketId2: nick2, ...}
        // -> Object.valuses(): [nick1, nick2, ...] 
        // -> indexOf() 를 써서 nick이 존재 하는지 검사 -> 없으면 -1 있으면 index 번호값 출력

        console.log(Object.values(nickArray));
            // console.log('접속 유저 목록 >>', nickArray);
            // console.log('보고싶다', Object.values(nickArray)[0].indexOf(Object.values(nickArray)[0]));
        
        if (Object.values(nickArray).indexOf(nick) > -1) {
            socket.emit('error', '이미 존재하는 닉네임입니다. 다시 시도해주세요.');
        }else {// 닉네임에 중복이 없다면
            nickArray[socket.id] = nick; // { socket.id: nick} 으로 설정
            console.log('접속 유저 목록 >>', nickArray);
            io.emit('notice', `${nick}님이 입장하셨습니다.`)    
            socket.emit('entrySuccess', nick);
        }
    });
    // 실습 44-3 접속자 퇴장시 
    // "notice" 이벤트로 퇴장 공지
    socket.on('disconnect', () => {
        console.log('퇴장',socket.id);
        io.emit('notice', `${nickArray[socket.id]}님이 퇴장하셨습니다.`);
    });

    //실습 45 채팅창 메세지 전송 step1
    socket.on('send', (data) => {
        console.log('send 한거',data);
        //실습 45 step2
        const sendData = { nick: data.myNick, msg: data.msg}
        io.emit('newMessage', sendData);
    });

});



// 주의!!!) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});