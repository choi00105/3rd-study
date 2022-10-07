console.log('connected!');

/*조건문
    어떤 조건에 따라 논리 구조를 분기(나눔)
    ->조건에 따라 서로 다른 문장을 실행

연산자
    동등연산자 ==, !=, ===
*/

console.log(1==1);  //t
console.log(1==2);  //f
console.log(1!=1);  //f
console.log(1!=2);  //t

console.log('1'==1);    //t 
console.log('1'!=1);    //f 
//자료형(타입)이 달라도 괜찮, 값만 비교 자료형까지 비교 하려면 ===, !==
console.log('1'===1);   //f 
console.log('1'!==1);   //t

//비교연산자 >, <, >=, <=
console.log('----------------');
console.log(2>1);   //t
console.log(2<1);   //f
console.log(2>=1);  //t
console.log(1<=1);  //t

//논리 연산자 &&, ||, !
console.log('----------');
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.log(!true);
console.log(!false);
console.log(!!false);

console.log((2>1)&&(-2<1));// t and t -> t
console.log(!(2>1)); // t not -> f
console.log(((2>1) && (-2<1))||(5>2)) //t and t ->t / t or t -> t
    
//조건문
if(5>3){
    console.log('bigger!');
}
//함수 안에서 조건문 사용
function isBig(){
    if(5>3){
        return 'bigger';
    }
}
console.log(isBig());

if(5>3){
    console.log('bigger..');

}else{
    console.log('smaller..');
}

if(5<3){
    console.log('smaller...');
}else if(5>3){
    console.log('bogger...');
}else if(5==3){
    console.log('same...');
}

if(5<3){
    console.log('smaller!');
}else if(5>3){
    console.log('bogger!');
}else{
    console.log('same!');
}

let score =80;
if(score>=90){
    console.log('A');
}
else if(score>=80){
    console.log('B');
}
else if(score>=70){
    console.log('C');
}
else if(score>=60){
    console.log('D');
}else{
    console.log('F');
}

let usrId = 'user';
let usrPw = '1234';
let inputId = 'user';
let inputPw = '1234';

//조건문 중첩

//아이디 일치
//  ->비밀번호 일치 -> 인사
//  ㄴ비밀번호 불일치 -> 불일치
//아이디 불일치 -> 아이디 없음

if(usrId == inputId){
    if(usrPw==inputPw){
        console.log(`${usrId}님 하이`);
    }else{
        console.log('비밀번호 불일치');
    }

}else{
    console.log('아이디 없음');
}

//=======================================
// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.
let n=6;
if (n%2==0){
    console.log('짝수');
}else{
    console.log('홀수')
}

// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

function isEven(x) {
	// 함수 완성하기
    if (x%2==0){
        return true;
    }else{
        return false;
    }
}
console.log('x는 '+isEven(8)+'   ㅇ'); // true
console.log(`X는 ${isEven(7)}  ㅇ`); // false

// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환
function getColor(sign) {
    // 함수 내부 채워주세요
    if(sign=='go'){
        return 'green';
    }else if(sign=='slow'){
        return 'yellow';
    }else if(sign=='stop'){
        return 'red';
    }

  }
  console.log(getColor('go')); // green
  console.log(getColor('slow')); // yellow
  console.log(getColor('stop')); // red
  
  
  // ======================================
  // (중첩 조건문)
  // Q.
  // - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
  // - pw1은 길이가 5 이상이라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환
  
  function isValidate(pw1, pw2) {
    // 함수 내부 채워주세요 
    if(pw1.length >= 5){
        if(pw1==pw2){
             return '비밀번호 일치~';
        }
        else{
             return '비밀번호 불일치..';
        }
    }else return '비밀번호는 5자리 이상!!!';


}
  
  // 브라우저 콘솔창 확인 결과
  console.log(isValidate('1234', '1234')); // '비밀번호는 5자리 이상!!!'
  console.log(isValidate('12345', '12345')); // '비밀번호 일치~'
  console.log(isValidate('12345', '12345!!')); // '비밀번호 불일치..'
  
  
  // ======================================
  // Q. 바로 위에 문제에서 조건 추가!!
  // 비밀번호 확인 조건이 추가되었습니다.
  // - pw1은 길이가 5 이상이고 8이 이하라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
  function isValidate2(pw1,pw2) {
   // 함수 내부 채워주세요.
   if(pw1.length >= 5 && pw1.length <= 8){
        if(pw1==pw2){
             return '비밀번호 일치~';
        }
        else{
            return '비밀번호 불일치..';
        }
    }else return '비밀번호는 5자리 이상 8자리 이하!!!';
}
  
  
  // 브라우저 콘솔창 확인 결과
  console.log(isValidate2('1234', '1234')); // '비밀번호는 5~8자리만 가능!!!'
  console.log(isValidate2('123456789', '123456789')); // '비밀번호는 5~8자리만 가능!!!'
  console.log(isValidate2('12345', '12345')); // '비밀번호 일치~'
  console.log(isValidate2('12345', '12345!!')); // '비밀번호 불일치..'