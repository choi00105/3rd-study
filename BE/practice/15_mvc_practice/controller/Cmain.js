
const Users = require('../model/User');
exports.main = (req, res) => {
    res.render('index', { title: '동적 폼 실습' });
};

exports.login = (req, res) => {
    // console.log(account.userInfos().realId);
    let userInfos = Users.users.split('\n');
    console.log('name은 : ',((Users.users.split('\n'))[0]).split('//')[2]);

    for( var i = 0; i < 3; i++){
    if (userInfos[i].split('//')[0] === req.body.userId && userInfos[i].split('//')[1] === req.body.userPw) {
            res.send({ userInfo: ((Users.users.split('\n'))[0]).split('//')[2], isSuccess: true });
            console.log(i);
        } else {
            res.send({ isSuccess: false });
        }
    }
    
}
