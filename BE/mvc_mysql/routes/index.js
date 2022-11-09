const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET /
router.get('/', controller.main);

// GET /visitor => loclahost:PORT/visitor
router.get('/visitor', controller.getVisitors); // 전체조회

// GET /visitor/get => localhost:PORT/visitor/get
router.get('/visitor/get', controller.getVisitor) //하나 조회

// POST /visitor/write => localhost:PORT/visitor/write
router.post('/visitor/write', controller.postVisitor); // 하나 추가

// PATCH /visitor/edit => localhost:PORT/visitor/edit
router.patch('/visitor/edit', controller.patchVisitor); // 하나 수정

// DELETE /visitor/delete => localhost:PORT/cisitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); //하나 삭제

module.exports = router;