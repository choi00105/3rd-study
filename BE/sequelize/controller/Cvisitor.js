// const Visitor = require('../model/Visitor'); // 수정전

const models = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};


exports.getVisitors = (req, res) => {
 // 수정 전
  // Visitor.getVisitors((result) => {
  //   console.log('Cvisitor.js', result); // [ {}, {}, {}, {} ]
  //   res.render('visitor', { data: result });
  // });

  // SELECT * FROM visitor
  models.Visitor.findAll().then(result => {
    console.log('find All 결과', result);
    res.render('visitor', {data: result });
  });
};

exports.getVisitor = (req, res) => {
  // before
  // console.log(req.query); // { id: '1' }
  // console.log(req.query.id); // '1'

  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log('Cvisitor.js', result);
  //   res.send(result);
  // });

  // SELECT * FROM visitor WHERE id=${id}
  models.Visitor.findOne({ // where절 안에 조건을 넣어줘야함
    where: { id: req.query.id}
  }).then(result => {
    console.log('find ONE 결과', result);
    res.send(result);
  })
};

exports.postVisitor = (req, res) => {
  // 수정 전
  // console.log('postvisitor: ', req.body);
  // // postvisitor:  { name: '빅파이', comment: '맛있다' }

  // Visitor.postVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js', result); // Cvisitor.js 10
  //   res.send({
  //     id: result, // pk(id) -> 10
  //     name: req.body.name, // 폼에 입력한 name
  //     comment: req.body.comment, // 폼에 입력한 comment
  //   });
  // });
  //INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')
  //INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result)=> {
    console.log('create 수정 결과 ',result);
    res.send(result);
  });
};

exports.patchVisitor = (req, res) => {
  // console.log(req.body);

  // Visitor.patchVisitor(req.body, (result) => {
  //   console.log('Cvisitor.js:', result);
  //   res.send('수정 성공!!!');
  // });

  // UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id='${}
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log('update 변경 결과 ', result); // [ 1 ] : 1개 업테이트 했다는 뜻
    res.send('수정 성공 !!!');
  });
};

exports.deleteVisitor = (req, res) => {

  // console.log(req.body); // { id: '1' }
  // console.log(req.body.id); // 1

  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log('Cvisitor.js: ', result);
  //   res.send('삭제 성공!!!');
  // });

  // DELETE FROM visitor WHERE id=${id}
  models.Visitor.destroy({
    where: {id: req.body.id},
  }).then((result) => {
    console.log('destroy 결과', result); // [ 1 ] : 1개 업테이트 했다는 뜻
    res.send('삭제 성공!!!');
  });
};
