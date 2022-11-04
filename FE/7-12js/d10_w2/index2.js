console.log('!')

//JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math...

//=======================
//Date 객체 : 시간, 날짜에 대한 정보를 얻기위함
let now= new Date();
console.log(now);

//ms 기준, 1970-01-01 09:00:00 를 기준으로 계산
console.log(new Date(0));
//위 시간을 기준으로 800000ms 지난만큼
console.log(new Date(800000));

/* new Date(y, m, d, h, m, s, ms)
    year: 4자리
    month: 0(1월) ~ 11(12월) -> 주의!
    date: 1~31 -> 생략하면 1으로 처리(default)
    hour, minutes, seconds, ms
*/
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));
console.log(new Date(2022, 8, 30, 10, 53, 30)); //2022-9-30 10:53:30

//Date 객체 매서드 이용해서 년, 월, 일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); //요일 0(일)~6(토)


// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문
let today = new Date();
let a=today.getDay;
if(a===0||a===6){
    console.log('주말');
}else console.log('평일');

switch(a){
    case 0: console.log('주말');
        break;
    case 6: console.log('주말');
        break;
    default: console.log('평일')
        break;
}

switch(a){
    case 1:
    case 1:
    case 1:
    case 1:
    case 1:
    console.log('평일');
    
}

/*  Math 객체

    수학적인 상수와 함수를 위한 속성과 매서드 */
    
    //속성  속성과 매서드의 차이는 ()가 있는가 없는가 있으면 매서드
console.log(Math.E); //자연로그 밑
console.log(Math.PI);
console.log(Math.ESQRT2);//2의 제곱근

    //매서드
console.log(Math.min(100, 200, 30, 7)); //최소값 출력
console.log(Math.max(100, 200, 30, 7)); //최대값 출력
console.log(Math.round(6.5));   //반올림
console.log(Math.round(6.3));
console.log(Math.floor(6.5));   //내림
console.log(Math.floor(6.3));
console.log(Math.ceil(6.5));    //올림
console.log(Math.ceil(6.3));

console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7)));

//0 <= x < 1 범위의 난수
console.log(Math.random()); 

//0 <= x < 10 범위의 정수
console.log(Math.floor(Math.random() * 10));

console.log(Math.floor((Math.random() * 10)+1));

console.log(Math.floor((Math.random() * 100)+1));
//0~30 --> 200~230  -->
console.log(Math.floor(((Math.random() *30)+200)/10));

// 20 <= Math.random() * 3 + 20 < 23
console.log(Math.floor(Math.random() * 3) + 20); 
// Math.random() * n 에서 n의 개수 == 포함된 숫자의 개수



