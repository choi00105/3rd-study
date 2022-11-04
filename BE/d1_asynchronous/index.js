// #1 setTimeout()
// setTimeout(code, delay)

// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 2000)
// console.log(3);

// #2 비동기 처리
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');

// }
// function pickDrink() {
//     setTimeout(function () {
//         console.log('고민끝');
//         product = '제로 콜라';
//         price = 2000;
//     },3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product}, 가격 : ${price}`);
// }
// let product;
// let price;
// goMart();
// pickDrink();
// pay(product, price);
// #3 콜백함수
// - 다른 함수의 실행이 끝난뒤에 실향되는 함수
// -js에서는 어떤 함수의 :매개변수"로 쓰일 수 있음
// 비동기 방식으로 처리된 코드를 "동기 처리" 할 수 있도록
// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.');
// }
// function pickDrink(callback) {
//     // *callback: 매개변수가 될 콜백함수
//     setTimeout(function () {
//         console.log('고민끝');
//         product = '제로 콜라';
//         price = 2000;
//         callback(product, price);
//     },3000);
// }

// function pay(product, price){
//     console.log(`상품명: ${product}, 가격 : ${price}`);
// }
//     let product, price;
//     goMart();
//     pickDrink(pay);
    
// #4 콜백 지옥(callback hell)
// : 콜백함수가 반복되어서 코드의 들여쓰기가 길어짐--> 가독성/유지보수성 하락
// 1초마다 배걍색아 변경되는 코드
//red orange yellow green blue 순

setTimeout(function() {
    document.body.style.backgroundColor = 'red';
    setTimeout(function() {
        document.body.style.backgroundColor = 'orange';
        setTimeout(function() {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(function() {
                document.body.style.backgroundColor = 'green';
                setTimeout(function() {
                    document.body.style.backgroundColor = 'blue';
                },1000);
            },1000);
        },1000);
    },1000);
},1000);