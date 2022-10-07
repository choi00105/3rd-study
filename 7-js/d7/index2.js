console.log('connect!');
//변수(variabble)
//-변할수 있는 수

//단계 1. 변수 선언 > 2. 값 할당

var a; //선언
console.log(a); //'undefined' 출력 값 할당하지 않은경우
a=2;//할당
console.log(a); //'2' 출력

var a=3; // 재선언 -> 바람직하지 않음
console.log(a);
a=4;
console.log(a);
a=10;
console.log(a);

/*var 문제점    
    -변수 재선언이 허용됨.
    -변수를 선언한 전에 전에 값 할당이 허용됨(장점으로 보일수도 있는데 유지보수에 최악)
*/
aaa=123; //선언 안해주고 사용 가능
console.log(aaa);


//그래서 나온게 let 키워드 : 중복선언 불가능(재할당은 가능)
let c;
console.log(c); //'undefined' 출력 / 값 할당되지 않아서
c=4;//값 할당
console.log(c);
c=5;//값 재할당
console.log(c);


/* const :상수 선언 키워드
    -재선언, 재할당 불가능
    -선언과 값 할당이 동시에 이루어져야 함
    -"번하지 않는 값"을 변수에 저장할 때
    ex. (const PI = 3.1415926535)
 */
const b=3;
console.log(b);
// b=5;
//재할당 하면 에러남 밑에줄 부터 읽기 X
console.log(b);
console.log(aaa);


// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?3
let q1 = 3;
q1 - 2;
console.log(q1);

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?13
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;
console.log(q2);


// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?1
const q3 = 1;
// q3 = q3 + 1;
console.log(q3);

/* 식별자: 이름을 붙일때 사용하는 단어(변수명, 함수명 등)
    1. 식별자에 키워드 사용 불가 
        -키워드: 특별한 역할을 이미 하고있는 단어 
        -ex) const, vat let, void, return, for, while, if ...
    2. 숫자로 시작 불가
    3. 특수문자 _, $만 허용
    4. 공백문자 불가 (space bar)
*/

// [QUIZ] 다음 중 식별자 가능한 것? 
// apple 가
// 1apple 불
// let 불
// $apple 가
// APPLE 가
// apple5 가
// _ 가
// $apple 가
// apple good 불
// _apple 가
// Apple가

//식별자에 단어 두개 이상 작성하고 싶은경우 camelCase가 js관례
// ex. redApple, youngMan

console.log('-------------');

/* 자료형
    데이터 종류
    1. 기본형(primitive)
        -string
            -텍스트 정보
            -("" or '')로 감싸야함
            -숫자, 특문도 따옴표 안에 있으면 문자열
        -number
        -boolean
        -null
        -underfined
    2. 객체(object)
        -배열
        -딕셔너리

    js는 다른 언어롸 달리 인터프리터(해석기)가 알아서 변수의
    타입을 파악한 후 저장하여 변수의 타입을 작성해주지 않아도 된다
    */
   var text='안녕하세요!';
   var text2= "하이~";
   var gender= '남자'
   var address= '서울'
   console.log(text);
   console.log(text2);
   console.log(text+text2);
   console.log(text+' 저는 홍길동 입니다. 성별은'+gender+'이고요 주소는 '+address + '입니다.');
   console.log(text,text2);

   //탬플릿 리터럴
   //string 내 변수와 상수를 간결하게 표현
   //백틱(``) 기호와 $,{} 사용
   console.log(`${text} 저는 홍길동 입니다. 제 성별은 ${gender}이고, ${address}에 거주중입니다.`);

   /*2. number 타입
        숫자(정수, 실수) 연산가능

   */

    var num1 = 100;
    var num2 = 0.12;

    var result = 100-2;
    console.log(result);
    
    var result = 'apple' - 3;
    console.log(result)

    /*3.boolean 타입
    true, false 둘 중 하나의 값을 갖는 논리요소
    */
    var isWater = true;
    var isApple = false;

    //4. null 타입
    //빈값, '타입이 존재' 하지만 '값이 없음'
    //값이 없다는 것을 의도적으로 명시할때 사용
    var y=null;
    console.log(y);

    //5. undefined 타입
    //값, 타입 모두 없음

//typeof(): 자료형 확인
console.log('-----------');

console.log(typeof('문자')); //string
console.log(typeof(245));  //number
console.log(typeof(ture));  //boolean
console.log(typeof(null));  //object -> js에서 인정한 오류

//괄호 말고 띄어쓰기로 해도 됨
console.log(typeof '문자')

//형변환
console.log('-----------');
//1. ? -> 문자
var str1 = true;
var str2 = 123;
var str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

console.log(typeof str1.toString());
console.log(typeof str2.toString());

//2. ? -> 숫자
var n1 = true;
var n2 = false;
var n3 = 123;
var n4 = '123';

console.log(typeof Number(n1));
console.log(typeof Number(n2));
console.log(typeof Number(n3));
console.log(typeof Number(n4));
console.log(typeof parseInt(n1, 10));
console.log(typeof parseInt(n2, 10));

   
// 산술연산자 + - * / % **(거듭제곱) 정수&실수 연산 가능
console.log(10.5/2);
console.log(2**10);