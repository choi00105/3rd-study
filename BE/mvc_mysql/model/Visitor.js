const mysql = require('mysql');

//DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
});

exports.getVisitors = (callback) => {
    conn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
        callback(rows);
    })
};

exports.getVisitor = (id, callback) => {
    conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('보고 싶다 Visitor.js', rows);
        callback(rows[0]);
    });
} ;

exports.postVisitor = (data ,callback) => {
    // data: 사용자가 폼에 입력한 정보
    conn.query(
        `INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')`,
        (err, rows) => {
            if (err) {
                throw err;
            }
            console.log('Visitor.js', rows);
            callback(rows.insertId);
        }
    );
};

exports.patchVisitor = (data, callback) => {
    conn.query(`UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id='${data.id}'`,
    (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Visitor.js', rows);
        callback(true);
    });
};

exports.deleteVisitor = (id, callback) => {
    // 삭제 버튼을 클릭한 그 행의 id 값
    console.log('ID :', id);
    conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) =>{
        if (err) {
            throw err;
        }

        console.log('Visitor.js: ', rows);
        callback(true); // true로 삭제 성공을 의미
    });
};
