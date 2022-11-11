// sequelize-cli 자동 생성한 파일
'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
// config.json 불러오기
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
// sequelize 객체 선언시 매개변수로 정보들을 받음


db.sequelize = sequelize;
db.Sequelize = Sequelize;
// DB = 빈 객체 -> {sequelize: sequelize, Sequelize: Sequelize}
db.Visitor = require('./Visitor')(sequelize, Sequelize);
// models/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = { sequelize: sequelize, Sequelize: Sequelize, Visitor}


module.exports = db;
// db변수를 내보냄