//document 요소 다루기 (읽고 쓰기)

//1. HTML 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById('div1');
console.log(div1);

//innerHTML 속성 : 요소안의 '코드'를 가져오거나 수정
// -> 입력된 문자열을 HTML 형식으로!
console.log(div1.innerHTML); //읽기
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;';

// innerText 속성 : 요소안의 '텍스트'를 가져오거나 수정
// -> 입력된 문자열을 그대로!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트
console.log(div1.innerText);
div1.innerText= '여기는 <b>첫번쨰</b> 태그입니다. &hearts;';
div1.innerText= '안녕하세요!';

// textContent 속성 : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent);
div1.textContent= '안녕하세요!!@@';


// 2. 속성접근
// 요소.속성명
console.log(document.getElementById('beach'));

// let beach= document.getElementById('beach');
console.log(beach);
console.log(beach.id);
console.log(beach.src);
console.log(beach.alt);
console.log(beach.width);
let google= document.getElementById('google');

//getAttribute('name'): 속성값 가져오가
//setAttribute('name', 'value'): 속성값 설정하기
console.log(google);(google.getAttribute('href'));
google.setAttribute('href', 'https://www.naver.com');
google.innerText = 'Naver';

beach.setAttribute('src', './img/puppy.jpg');
beach.setAttribute('width', '150px');
beach.setAttribute('height', '150px');

//===============================
// 3. 스타일(css) 제어 : js로 css 설정 가능!

let h1= document.querySelector('h1');
// 3-1 인라인 스타일 제어: html 요소의 스타일로 인라인 으로 들어감
console.log(h1);
console.log(h1.style);
console.log(h1.style.fontSize);

h1.style.color= 'limegreen';
h1.style.backgroundColor= 'skyblue';
h1.style.border = '4px solid brown';
h1.style.textShadow = '2px 2px 10px #f005';

let lis= document.querySelectorAll('li');
console.log(lis);
// for (let i=0; i<lis.length; i++){
//     console.log(lis[i]);

//     lis[i].style.color = 'rgb(0, 100, 200)';
//     lis[i].style.fontSize = '20px';
//     lis[i].style.backgroundColor = '#ddd';
// }

// for ... of 반복문
// for(let 반복변수 of 배열){ }

let mylists = ['5', 'a', 'b', 'c', 'd', '5', 5];
for (let list of mylists){
    console.log(list);
}
console.log('=============');
// for(let li of lis){
//     console.log(li);
//     li.style.color = 'rgb(0, 100, 200)';
//     li.style.fontSize = '20px';
//     li.style.backgroundColor = '#ddd'
// }

/*  3-2. 클래스 제어 방식 (더 많이 쓰임)
    classList 속성
        -add(클래스명) : 클래스 추가
        -remove(클래스명) : 클래스 삭제
        -toggle(클래스명) : 클래스 있으면 제거, 없으면 추가
        -contains(클래스명) : 해당 클래스가 있는지 불 값으로 반환
*/
console.log(h1);
h1.classList.add('h1');
console.log(h1.classList);

for(let i of lis){
    // console.log(i);
    i.classList.add('li');
}
console.log('============')

console.log(h1.classList);
h1.classList.remove('title');
console.log(h1.classList);

h1.classList.toggle('happy'); //없어서 추가
console.log(h1.classList);
h1.classList.toggle('happy'); // 있어서 삭제
console.log(h1.classList);

console.log(h1.classList.contains('h1')); //true
console.log(h1.classList.contains('lucky')); // fales


//--------------------------------------------
// 계층이동
// 부모, 자식, 형제
const apple= document.querySelector('li');
const fruits= document.querySelector('ul');
console.log(apple);
console.log(fruits);

// 1. 부모 노드 찾기
// 직속 부모는 하나
console.log(apple.parentElement); //ul#fruits
console.log(apple.parentElement.parentElement); // body

// 2. 자식 노드 찾기
// 자식 요소는 여러개 나올수도
console.log(fruits.children); // li*4
console.log(fruits.children[0]); // 0 번 자식 요소
console.log(fruits.children[1]); // 1 번 자식 요소
console.log(fruits.children[2]); // 2 번 자식 요소
console.log(fruits.children[3]); // 3 번 자식 요소
// 부모 -> 자식 -> 부모
console.log(fruits.children[0].parentElement);

// 3. 형제 노드
const lists= document.querySelectorAll('li');
console.log(lists); // li*4
const listOrange= lists[2]; // 아래 코드와 동일
// const listrOrange= document.querySelectorAll('li')[2]
console.log(listOrange);
console.log(listOrange.previousElementSibling);
console.log(listOrange.nextElementSibling);

const num= document.querySelectorAll('li');
console.log(num);
const num32= num[8];
console.log(num[8]);
console.log(num32.previousElementSibling);
