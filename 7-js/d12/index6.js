// 이벤트 객체
// event
// 이벤트 발생: 브라우저는 발생한 이벤트에 대한 정보를 담은
// 이벤트 객체(event object)를 이벤트 리스너에게 전달

const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click', function (event) {
	console.log(event);
	// event: 이벤트 객체에 대한 정보를 담고 있음
});

const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('.todos');
todoForm.addEventListener('submit', function (event) {
	// form의 submit 이벤트는 제출되는 것이 기본 동작
	// 제출: 새로고침

	// preventDefault: 브라우저에서 구현된 기본 동작 취소
    // 폼이벤트: 폼이 제툴되면 새로고침 되는 기본 동작을 취소 하겠다는 의미
	event.preventDefault();

	const todoInput = document.querySelector('input[name="todo"]');
	console.log(todoInput);
	console.dir(todoInput); // console.dir(): 객체를 트리구조로 보여주는 명령어
	console.log(todoInput.value);
	let todo = todoInput.value; // 사용자가 input에 입력한 값

	// li 태그를 만들어서, li태그의 content로 input.value 값이 담기도록
	const newTodo = document.createElement('li'); // <li></li>
	newTodo.textContent = todo; // <li>사용자가 입력한 input 값</li>
	ul.append(newTodo); // <ul> <li>사용자가 입력한 input 값</li></ul>

    // const newTodo2= document.createElement('ol');
    // newTodo2.textContent= todo;
    // ul.append(newTodo2);
    // const newTodo3= document.createElement('ol');
    // newTodo3.textContent= todo;
    // ul.append(newTodo3);
    //input 초기화
    todoInput.value= '';//input의 vlaue를 빈 문자열로 설정해 초기화
});

// const todoForm= document.querySelector('#todo-form');
// const ul= document.querySelector('.todos');
// todoForm.addEventListener('click', function(event){
//     event.preventDefault();

//     const todoInput= document.querySelector('input[name="todo"]');
// })

//===============================

const chgInput= document.querySelector('#change-input')
console.log(chgInput);

chgInput.addEventListener('input', function(){
	console.log('CHANGE!!!!');
});

chgInput.addEventListener('input', function(){
	//input : 입력창에 변경이 일어나는 순간을 계속 감지	

	//change-input에 입력된 값이 div에 들가서 출력
	const div= document.querySelector('.intro');
	div.textContent= chgInput.value;
});


//============
//키보드 이벤트
const keyInput= document.querySelector('#key-input');

// keyInput.addEventListener('keydown', function(event){
// 	// keydown: 키를 누르고 있을 때
// 	// console.log(event);
// 	// console.log(event.code);

// 	if(event.code === 'ArrowUp'){
// 		console.log('UP!');
// 	}else if(event.code === 'ArrowDown'){
// 		console.log('Down!');
// 	}else if(event.code === 'ArrowRight'){
// 		console.log('Right!');
// 	}else if(event.code === 'ArrowLeft'){
// 		console.log('Left!');
// 	}else console.log('others');
// });

keyInput.addEventListener('keyup', function(a){
	// keydown: 키를 누르고 있을 때
	// console.log(a);
	// console.log(a.code);

	if(a.code === 'ArrowUp'){
		console.log('UP!');
	}else if(a.code === 'ArrowDown'){
		console.log('Down!');
	}else if(a.code === 'ArrowRight'){
		console.log('Right!');
	}else if(a.code === 'ArrowLeft'){
		console.log('Left!');
	}else console.log('others');
});


