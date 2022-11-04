// 1# 프로미스(Promise)
//  비동기 함수를 동기처리 하기 위해 만든 객체
//  성공 실패를 분리해서 반환 성공이든 실패든 무언가의 "최종결과"
//  - fulfilled (resolve) : 성공
//  - rejected (reject) : 실패

// function promise1(flag) {
//     return new Promise(function (resolve, reject){
//         if (flag===true){
//             resolve(
//                 `promise 상태는 fulfilled! then() 으로 연결됩니다. \n 이때 flag가 ${flag}입니다.`
//             );
//         }else {
//             reject(
//             `promise 상태는 rejected! catch() 으로 연결됩니다. \n 이때 flag가 ${flag}입니다.`
//             );
//         }
//     });
// }

// promise1(false) //true false
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

//  Promise 사용법
//  index.js에서 "콜백함수"를 이용해 
//  pomise를 이용해 동기처리 해보자!

// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
//   }
  
//   function pickDrink(callback) {
//     return new Promise(function(resolve, reject) {
//         //setTimeout() 비동기 처리 -> 동기처리 하기 위해 promise로 감싸기
//         setTimeout(function () {
//             console.log('고민 끝!');
//             product = '제로 콜라';
//             price = 4000;
//             // resolve();
//             if (price <= 2000) {
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 3000);
//     });
//   }
  
//   function pay() {
//     console.log(`${product} 제품의 가격은 ${price}이다.`);
//   }
//   function nopay() {
//     console.log(`${product} 제품의 가격은 ${price}이다. 그러나 안삼`);
//   }
// let product, price;
// goMart();
// pickDrink().then(pay).catch(nopay);

// #3 Promise 체이닝
// ex. 함수를 이용해 (4 + 3) *2 -1 =13 연산 해보기 add -> mul -> sub 순으로 연산 필요
// step 1. 콜백함수 사용
// function add(n1, n2, callback) {
//     setTimeout(function () {
//         let result = n1+ n2;
//         callback(result);
//     },1000);
// }

// function mul(n, callback) {
//     setTimeout(function () {
//         let result = n * 2;
//         callback(result);
//     },700);
// }

// function sub(n, callback) {
//     setTimeout(function () {
//         let result = n - 1;
//         callback(result);
//     },700);
// }

// add(4, 3, function (x) {
//     console.log(`1: ${x}`);
//     mul(x, function(y){
//         console.log(`2: ${y}`);
//         sub(y, function(z) {
//             console.log(`3: ${z}`)
//         })
//     });
// });

//  step2. 프로미스 체이닝 사용
function add(n1, n2, callback) {
    return  new Promise(function (resolve, reject) {
        setTimeout(function () {
            let result = n1+ n2;
            resolve(result);
        },1000);
    })
    }
    
function mul(n, callback) {
    return  new Promise(function (resolve, reject) {

        setTimeout(function () {
            let result = n * 2;
            resolve(result);
        },700);
    })
    }
    
function sub(n, callback) {
    return  new Promise(function (resolve, reject) {

        setTimeout(function () {
            let result = n - 1;
            // resolve(result);
            reject(new Error('의도적으로 에러를 일으켜 봤음!'))
        },500);
    })
    }

add(4,3)
    .then(function (result) {
        console.log('1: ',result);
        return mul(result);
    })
    .then(function(result){
        console.log('2 :', result);
        return sub(result);
    })
    .then(function(result){
        console.log('3 :',result);
        
    }).catch(function(err){
        console.log('실패!\n',err);
    })    ;