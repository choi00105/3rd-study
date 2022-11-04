console.log('connected!');
/*함수 : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
    함수 정의(생성) -> 함수 호출(사용) 2단계

함수 정의(생성)
function functionName(){

    do something
}
함수 호출(사용)
functionName();
*/

//함수 선언식 : 함수 선언식은 자스 특징인 호이스팅에 따라 브라우저가 자스를 해석할 때 
//코드를 구현한 위치와 관계없이 맨 위로 끌어올려진다
function helloWorld(){      //정의
    console.log("helloworld!");
}
helloWorld();               //사용

//함수 표현식
const helloWorld2 = function(){ //정의
    console.log("helloworld!!22");
}
helloWorld2();

function helloWorld3(){
    return "helloworld!!!3";
}
console.log(helloWorld3());

const helloWorld4 = function(){
    return "helloWorld4!!!!";
}
console.log(helloWorld4());

//case1. 매개변수(인자) 1개
function hello1(text){
    return text;
}
console.log(hello1("안녕!"));

//case2. 매개변수(인자) 2개
function hello2(text, name){
    let result = `${text} 나는 ${name} 이야`;
    return result;
}
console.log(hello2('안녕', 'sean'));

//case3. return 없이 바로 console.log찍기
function hello3(text, name){
    console.log(`${text} 나는 ${name}이야`);

}
hello3('안녕???', 'Lily');


//case4. case2를 함수 표현식 hello4
const hello4 = function(text, name){
    let result = `${text} 나는 ${name} 이야`;
    return result;
}
console.log(hello4('안녕4','이름4'));

//case5. case3을 함수 표현식 hello5
const hello5=function(text, name){
    console.log(`${text} 나는 ${name}`);

}
hello5("안녕5","이름5")