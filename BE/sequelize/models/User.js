const User = function (Sequelize, DataTypes) {
    // Sequelize: medels/index.js 의 sequelize
    // DataType: models/index.js 의 Sequelize

    // Sequelize.define(param1, param2, param3)
    // param1: 모델 이름 설정 -> 문자열
    // param2: 컬럼 정의 -> 객체
    // param3: 모델 옵션 정의 -> 객체
    
    return Sequelize.define(
        'user',
        {
            // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
            // 공식 문서에서 검색하가며 하면 됨
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            tableName: 'user', // 실제 DB의 테이블 이름
            freezeTableName: true, // 테이블 이름 고정
            timestamps: false, // 데이터가 추가/수정되는 시간을 자동으로 컬럼 만들어서 기록
        }
    );

};

module.exports = User;