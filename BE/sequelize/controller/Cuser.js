const models = require('../models'); // ../models/index.js

exports.index = (req, res) => {
    res.render('user');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    // User.post_signup(req.body, () => {
    //   res.send(true);
    // });
    models.User.create({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    }).then((result) => {   
        console.log('회원가입 콜백', result)
        res.send(true);
    });
};
exports.signin = (req, res) => {
    res.render('signin');
};
exports.post_signin = (req, res) => {
    // console.log(req.body);
    // User.post_signin(req.body, (result) => {
    //   console.log('## Controller post_sign >>', result); // [ {} ]
  
    //   if (result.length > 0) {
    //     res.send(true);
    //   } else {
    //     res.send(false);
    //   }
    // });
    console.log('보여줘요 ',req.body)
    models.User.findOne({
        where: {
            userid: req.body.userid,
            pw: req.body.pw,
        }
    }).then((result) => {
        console.log('@@@로그인 결과 rows : ', result);
        if(result) {
            res.send(true);
        } else{
            res.send(false);
        }      
    });
};
exports.post_profile = (req, res) => {
    // console.log(req.body);
    // User.post_profile(req.body.userid, (result) => {
    //   console.log('## Controller post_profile >>', result);
  
    //   if (result.length > 0) {
    //     // 로그인 성공; views/profile.ejs 렌더링
    //     res.render('profile', { data: result[0] });
    //   } else {
    //     // 로그인 실패; /user/signin 주소 이동
    //     // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
    //     res.redirect('/user/signin');
    //   }
    // });
    console.log('프로피른보여줘', req.body);
    models.User.findOne({
        where: { userid: req.body.userid },
        }).then((result) => {
        console.log('####post profile \n',result);
        if (result) {
                // 로그인 성공; views/profile.ejs 렌더링
                res.render('profile', { data: result });
              } else {
                // 로그인 실패; /user/signin 주소 이동
                // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
                res.redirect('/user/signin');
              }
        
    })
};
exports.edit_profile = (req, res) => {
    // console.log('## Controller edit_profile >>', req.body);
    // User.edit_profile(req.body, () => {
    //     res.send('회원정보 수정 성공!');
    // });
    models.User.update({
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    // }).where({
    //     id: req.body.id,
    }).then( ()=> {
        res.send('회원정보 수정 성공');
    })
};

exports.delete_profile = (req, res) => {
    // console.log('## Controller delete_profile >>', req.body);
    // User.delete_profile(req.body.id, () => {
    //     // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
    //     res.redirect('/user/signin');
    // });
};