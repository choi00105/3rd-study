// 클래스 - 객체를 생성하는 탬플릿 
// 클래스 : 붕어빵 틀
// 객체 : 붕어빵

class Cat {
  // 생성자
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }

  // 매서드
  mew() {
    return '야옹~';
  }

  eat() {
    return '밥먹자!';
  }
}

let navi = new Cat('나비', 2);
let nyang = new Cat('냥이', 3);
console.log(navi.name);
console.log(navi.age);
console.log(navi.mew());
console.log(navi.eat());

console.log(nyang.name);
console.log(nyang.age);
console.log(nyang.mew());
console.log(nyang.eat());

class Person {
  constructor(name, gender){
    this.name=name,
    this.gender=gender
  }
  study() {
    return `${this.name}는 공부하자`
  }
}
let minji = new Person('민지', '여자');
let minku = new Person('민구', '남자');
console.log(minji, minji.name, minji.gender, minji.study());
console.log(minji, minku.name, minku.gender, minku.study());