console.log('!!');

/* 
자료형
    -기본형(primitive)
    -객체(object)
        -배열
        -객체 리터릴(객체)
        */

//1. 배열
const arr1 = ['red', 'orange', 'yellow', 1, 2, 3];
console.log(arr1);
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3);

console.log(typeof arr1);
console.log(typeof(arr1));
console.log(arr2);
console.log(typeof arr2);
console.log(typeof(arr2));
console.log(arr1.length)

//배열 원소(요소) 읽기
//인덱스: 배열 원소 위치값
// 숫자는 0부터 시작
let str = 'Green';
console.log(str[0]);
console.log(arr1[0]);
console.log(arr1[5]);

//배열 원소값 변경
console.log(arr1);
arr1[2]='따란';
console.log(arr1);

console.log(arr1);
arr1[4]=100;
console.log(arr1);

//배열 원소 추가
arr1[6]='추가';
console.log(arr1);
arr1[7]= '추추가;'
console.log(arr1);

//동떨어진 인덱스 번호로 원소값 추가 --> 그 사이에 빈값
arr1[10]='얍';
console.log(arr1);
console.log(arr1[8]);
console.log(arr1[9]);

//배열에서 자주 사용되는 속성/매서드
// 1. length: 배열길이 == 요소개수
console.log(arr2.length);
//제일 마지막 가져오기
console.log(arr2[arr2.length - 1]);

// 2. push(x): x를 맨 뒤에 추가
arr2.push(4);
console.log(arr2);
arr2.push(5);
console.log(arr2);
arr2.push(6);
console.log(arr2);
arr2.push(10, 9, 8,'7', '6');
// 3. pop(): 맨 뒤 요소를 제거
arr2.pop();
console.log(arr2);

// 4. unshift(x): 맨 앞에 x를 추가
arr2.unshift('hi');
console.log(arr2);
arr2.unshift('a', 'b');
console.log(arr2);

// 5. shift(): 맨 앞 요소를 제거
arr2.shift();
console.log(arr2);
arr2.shift();
console.log(arr2);

// 6. indexOf(x): 배열 원소에 x가 있는지 찾음
console.log(arr2.indexOf('orange'));
console.log(arr2.indexOf('xxxx')); //없는값을 찾으면 -1 반환

const korean = [
    ['가', '나', '다'],
    ['라', '마', '사'],
    ['아', '자', '차'],
];
console.log(korean);
console.log(korean[0]);
console.log(korean[0][2]);

const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];

console.log(letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2])

//3차원 배열
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
console.log(nums);
console.log(nums[1][0][1]);

//======================================
/* 객체 리터널, 딕셔너리(object)
    배열: 순서가 있음
    객체: 키-값 형태
    {}를 이용해 생성
    {key1: value1, key2: value2, key3: value3, ...}
    */
const cat = {
    name: '나비',
    age: 1,
    new: function(){
        return '냐옹';
    },
};
console.log(cat);

//객체 접근하기
// 1. 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.new());
// value 변경하기
cat.age = 3;
console.log(cat);
//value 추가하기
cat.gender = 'f';
console.log(cat);

// 2. 대괄호 표기법
console.log(cat['name']);
console.log(cat['gender']);
console.log(cat['new']());
//value 변경하기
cat['age']= 5;
console.log(cat);
//key-value 추가하기
cat['weight']=5;
console.log(cat);


// value 값 : boolean, array, number, string, object 등 가능....
const dog = {
    name : '코코',
    isPoodle: true,
    age: 3,
    sibling:['Max', 'Lucy', 'Bella'],
};

console.log(dog);
console.log(dog.name);
console.log(dog.isPoodle);
console.log(dog.sibling[0]);
console.log(dog.sibling[1]);
console.log(dog.sibling[2]);
// 객체 타입 확인 --> object 타입
console.log(typeof dog);
console.log(typeof (dog));

