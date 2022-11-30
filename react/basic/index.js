console.log('==================================================='); // node로 터미널에서 출력 가능

// 구조 분해 할당
//  1. 배열 구조 분해 - 순서가 중요: 변수의 순서와 요소의 순서가 일치해야 한다
//  - 없는 값은 undefined
//  - 기본 값 설정 가능
const lists = ['apple', 'grape'];
[item1, item2, item3 = 'peach'] = lists;
console.log('item1: ', item1);
console.log('item2: ', item2);
console.log('item3: ', item3);

// Swap : 두 변수의 값 교환
let x =1, y = 2;
[x, y] = [y, x];
console.log('x: ', x);
console.log('y: ', y); // x: 2 y: 1 로 바뀜

// 2. 객체 구조 분해
//  - 키 값과 변수명 일치해야 함
//  - 없는 키값을 변수로 받으면 undefined
const obj = {
  key1: 'one',
  key2: 'two',
};
const { key1, newKey1, key2, key3 = 'three' } = obj;
console.log(key1);
console.log(newKey1);
console.log(key2);
console.log(key3);

// 기억
const { a, b } = { a:10, b:20 };
console.log(a)
console.log(b)





// spread 연산자 : 값을 펼치는 연산자

// object
const defaultInfo = {
  price: 2000,
  store: 'cu'
}
const chocoIcecream = {
  ...defaultInfo,
  flavor: 'choco',
  
};
const strawberryIcecream = {
  flavor: 'strawberry',
  ...defaultInfo,

};
const mangoIcecream = {
  flavor: 'mango',
  ...defaultInfo,

};
console.log(chocoIcecream);
console.log(strawberryIcecream);
console.log(mangoIcecream);

// array
const nums1 = ['one', 'two', 'three'];
const nums2 = ['four', 'five', 'six'];

const nums = [...nums1, 'seven', ...nums2];
console.log(nums);