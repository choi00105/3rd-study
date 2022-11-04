-- DDL(Data Definition Language) : 데이터 베이스(테이블) 정의어

-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터배이스 삭제
DROP DATABASE kdt;

-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
)
*/
-- 제약조건
-- NOT NULL : NULL 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가(데이터가 들어옿때마다 증가)
-- PRIMARY KEY : 가본키 설정
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 x


CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
CREATE TABLE member1 (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT(2),
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);
-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;
DESC member;
-- 4. 테이블 삭제
DROP TABLE user; -- 그냥 다 삭제 (구조 자체를 삭제)
TRUNCATE TABLE user; -- 초기화 (모든 행 삭제)

-- 5. 테이블 수정(구조 수정)
-- ADD : 컬럼 추가
ALTER TABLE user ADD new_column VARCHAR(10);
ALTER TABLE member ADD interest VARCHAR(100);

-- MODIFY : 컬럼 수정
ALTER TABLE user MODIFY new_column INT;
ALTER TABLE member modify id varchar(10);
-- DROP : 컬럼 삭제
ALTER TABLE user DROP new_column;
ALTER TABLE member DROP age;
-- ALTER TABLE  MODIFY new_column INT;

-- =====================================================================================
-- DML(Data Mainpulation Language) : 데이터베이스 내부의(테이블 안의) 데이터를 관리하기 위한 언어

-- Create - INSERT : 데이터 추가
-- 참고) AUTO_INCREMENT 컬럼의 값은 굳이 안넣으면 자동으로 증가
-- NULL 이라고 넣으면 알아서 숫자가 지정되기도 함
-- 주의) AUTO_INCREMENT 컬름은 반드시 PK(Primart Key)기본키 주키 
INSERT INTO user (name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES('이지은', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES('권희수', 36, '서울특별시 영등포구');
-- Read - SELECT : 데이터 읽기(조회)
-- * : all
SELECT * FROM user; -- user 테이블의 전체 컬럼 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT age, name FROM user; -- age name 순서로 칼럼 조회
SELECT id, address FROM user; -- id, 주소 순서로 칼럼 조회

-- WHERE 절 : 특정 조건을 만족하는 행(튜블, 레코드) 선택
SELECT * FROM user WHERE  age >= 25; -- 나이가 25 이상인 사람
SELECT * FROM user WHERE id = 7; -- id가 7인 사람
SELECT name FROM user WHERE id = 7; -- id가 7인 사람의 이름 조회
SELECT id, age FROM user WHERE name ='이지은'; --이름이 이지은인 사람의 id, age 조회 (끌자수 안맞으면 애초에 제외)

-- ORDER BY 절: 데이터  정렬
-- ASC : 오름차순 (기본값)
-- DESC : 내림차순
SELECT * FROM user ORDER BY age DESC; -- age 내림차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; -- id가 6초과인 사람 중에서 age 오름차순 정렬
SELECT * FROM user ORDER BY name ASC; -- name 오름차순 정렬(가나다 순)

-- LIKE: 패턴 조회  % : 0개 이상의 문자 / _ : 1개의 단일 문자
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소의 데이터
SELECT * FROM user WHERE name LIKE '__희'; -- name의 마지막 글자가 '희'인 데이터
SELECT * FROM user WHERE name LIKE '%희%'; -- name에 앞뒤 어디든 '희'가 있는 데이터
SELECT * FROM user WHERE address LIKE '%광역%'; --address 에 '광역'이 있는 데이터
SELECT * FROM user WHERE name LIKE '__희' ORDER BY age DESC;
-- name의 마지막 글자가 '희'인 사람들 age 기준으로 내림차순

-- LIMIT: 데이터 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;

-- BETWEEN a AND b : 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

-- IN (list): 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);

-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUES ('서현승', 28);
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자 : ADN OR NOT
SELECT * FROM user WHERE address IS NOT NULL AND age < 25; -- address가 NULL이 아니면서 age가 25미만
SELECT * FROM user WHERE address IS NOT NULL OR age < 25;
SELECT * FROM user WHERE name LIKE '이%' AND age = 23; -- 이씨 이면서 나이는 23인 데이터

-- Update - UPDATE : 데이터 갱신(수정) 기본키값을 기준으로 수정하는게 바람직
-- 참고) Error Code: 1175. -> 테이블 데이터를 update/delete 하려 할 때
UPDATE user SET address = '서울특별시 강북구' WHERE name = '이한이'; -- error 남
UPDATE user SET address = '서울특별식 강붑구' WHERE id = 1;
UPDATE user SET address = '제주특별자치도 제주시', name = '이지현', WHERE id = 2;
-- 주의) update where 절 미사용시, 모든 행의 데이터가 변경됨 -> update 에서는 where 절이 항상 따라다님

-- Delete - DELETE: 데이터 삭제
-- 주의) delete WHERE절 미사용시 모든 행의 데이터가 삭제된 -> delete 에서는 where절이 항상 따라다님
DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;
-- =====================
CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hong1234', '8o4kg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('power80', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1979-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('dvadva', 'k3fah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '_____06___' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197%';
SELECT * FROM user  ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

-- ===============================
-- DCL (Data Control language) : 사용자가 DB에 접근해서 읽거나 쓰는 것을 제한하는 권한 부여/박탈

-- GRANT : 사용자에게 특정 작업에 대한 수행 권한 부여
-- REVOKE : 사용자에게 특정 작업에 대한 수행 권한 박탈