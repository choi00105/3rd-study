const User = require('../model/User');

// GET /user
exports.user = (req, res) => {
    console.log(User.userInfo()); // 함수의 바디에는 {회원정보}
    res.render('user', { userInfo: User.userInfo() });
}