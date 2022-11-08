const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.post('/practice30', controller.login);

module.exports = router;
