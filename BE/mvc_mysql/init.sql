CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);
-- DML 
-- 테이블 전체 데이터 조회 (read)
SELECT * FROM visitor;  -- all
SELECT * FROM visitor WHERE id=1; -- 하나만

-- 테이블 데이터 추가 (create)
INSERT INTO visitor (name, comment) VALUES('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES('이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES('김김김', '김과밥은');

DELETE FROM visitor WHERE id > 3;

UPDATE visitor SET name = '누구', comment = '아무말' WHERE id = 3;

-- DCL
-- mysql 사용자 추가 (user 계정)
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 DB권한 부여 (모든 DB에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MYSQP 캐시 지우고 새오룬 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

DELETE FROM visitor WHERE id >2;