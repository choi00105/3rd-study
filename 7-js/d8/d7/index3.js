// ========================================
function countNum() { // 함수 정의
	let count = 7; // 함수 안에서 변수 선언 + 할당 
	console.log('count 값1: ', count); // 7
}
countNum(); // 함수 호출
//console.log('count 값2: ', count); // Uncaught ReferenceError: count is not defined

// 지역변수 
// => 함수 안에서 선언한 변수는 함수 안에서만 유효하다.
// => 지역변수는 함수의 body를 벗어나면 접근할 수 없다.

let count2 = 0;
console.log('count 값: ', count2);

function countNum2(){
    count2 = 77;
    console.log('count 값: ', count2);

}
countNum2();
console.log('count 값: ', count2);

let color = 'red';
function printColor(){
    let color= 'green';
    console.log(color);
}
printColor();
console.log(color);

let animal = 'dog';
function who() {
  let animal = 'cat';
  console.log(animal);  // ?->cat
}
who();
console.log(animal);  // ?->dog

//=================================
/* 문자열 속성과 메서드(함수)
자바스크립트에서 기본 제공하는 문자열에서 사용 가능한 기능
*/

console.log('------------');
//속성 length : 문자열 길이
var song = 'Strawberry Moon';
var song2 = 'Strawberry Moon!!';
console.log(song.length);
console.log(song2.length);

//XX.method 형태
// toUpperCase(): 대문자로 변경
// toLowerCase(): 소문자로 변경
// trim(): 양 끝 공백 제거
var msg = 'Happy BirthDay!';
var userId = '      user123   ';

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length);
console.log(userId.trim());
console.log(userId.trim().length);

//연달아 사용 가능
var msg2= '   hello world! !!    ';
console.log(msg2.trim().toUpperCase().length);
console.log(msg2.length);


/*인덱싱(indexing): string에서 한 글자를 선택
    변수명[위치값]
    위치값: 숫자 0부터 시작
*/
console.log(song);//Strawberry Moon
console.log(song[0]); //첫글자 'S'
console.log(song[1]);
console.log(song[2]);
console.log(typeof(song[2])); //string 형태
console.log(song[1]+song[7]);
console.log(song[1].length);
console.log(song[1].toLowerCase());

console.log(song[0]+song[13]+song[14]+song[14]+song[9]);
console.log(song[0].toLowerCase()+song[13]+song[14]+song[14]+song[9]);


/* XX.method(arg) 형태
    indexOf(): string에서 x가 나타내는 인데스(위치값) 반환
            글자가 있나 검색할때 사용기 좋음 (없다면 -1 반환)
    slice(): stratIndex 부터 끝까지 문자열을 잘라내어 변환
            음수값도 대입 가능
    replace(교체될 값, 교체되어 들어가는 값)
        : 발견한 값을 모두 찾아서 교체
    */

var fruit = 'applemango';
var msg = 'Wow~ It is so aamzing~~~~!!';
console.log(fruit.indexOf('a'));
console.log(fruit.indexOf('l'));
console.log(fruit.indexOf('mang'));
console.log(fruit.indexOf('x'));

console.log(fruit.slice(5)); //앞 5개 자르고 mango 출력
console.log(fruit.slice(-1)); //뒤에 첫번째 o 출력
console.log(fruit.slice(-3)); //뒤에 세번째~첫번째 ngo 출력

console.log(msg.replace('Wow', 'Hey')); //앞쪽 부터 바뀜
console.log(msg.replaceAll('a', 'A'));

// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26
let date = '2022.9.26';
console.log(date.replaceAll('.','-'));
console.log(date.replaceAll('.','-').slice(2))




























