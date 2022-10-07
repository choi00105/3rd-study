//document 객체
//속성

// html 태그 반환
console.log(document.documentElement);
console.log(document.head);//head tag 반환
console.log(document.body);//body tag 반환

console.log(document.URL); //웹페이지 전체 url 반환
console.log(document.domain); //url에서 도메인 반환

//html 요소 선택하는 방법
// =dom 요소 선택하기(DOM API)

//노드 객체 가져오기
//  1. getElementById('아이디명') : 아이디 이름으로 요소 가져옴
//  id는 유일함으로 속도가 가장 빠름-> id만 Element 로 단수형
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));
console.log(document.getElementById('third'));
console.log(document.getElementById('fourth'));
console.log(document.getElementById('fifth'));

console.log('=========@@@@@@@@@@@@@@@=');

//  2. getElementsByClassName('클래스명) : 클래스 이름으로 요소 가져옴
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));
//배열요소
console.log(document.getElementsByClassName('korean')[0]);

console.log('=======================');
//  3. getElementsByTagName('태그명'): 태그이름으로 요소 가져옴
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);

//Element's' 붙은 것들은 배열형식으로 가져오기 때문에 인덱싱이나 반복문을 이용해 접근해야 한다.

// "CSS 선택자"를 이용해 노드 객체 가져오기
// querySelector('.CSS셀렉터'): 일치하는 "첫번째 요소"만 가져옴
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));

//  querySelectorAll('.CSS셀렉터'): 일치하는 모든 요소 가져옴(배열 형식)
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.bunsik'));
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.korean')[0]);
//이런식으로 가능
console.log(document.querySelectorAll('.lunch-list #third:hover'));
