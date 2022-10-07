console.log('!!!');
/* 반복문
    -for 문
    -while 문

for문
for(초기값;조건식;증감값){
    //반복할 코드
}
i++ == i=i+1
*/
for(let i=0; i<5; i++){
    console.log(i);
}console.log('반복문 끝');
for(let i=1; i<=5; i++){
    console.log(i);
}console.log('반복문 끝');
for(i=1; i<6; ++i){
    
    console.log(i);
}console.log('반복문 끝');

for(let i=5; i>0; i--){
    console.log(i);
}console.log('반복문 끝');

for(let i=1; i<=10; i++){
    if (i%2===0){
         console.log(i);
    }
}console.log('반복문 끝');


for(let i=2; i<=10; i=i+2){
    
         console.log(i);
    
}console.log('반복문 끝');

let sum=0;//합을 저장할 변수
for(i=1; i<=10; i++){
    sum=sum+i;
}console.log(`1~10 까지 더한 값: ${sum}`);

sum=0;
let sum2=0;
for(i=0; i<=10; i++){
    if (i%2===0){
        sum=sum+i;
    }else {
        sum2=sum2+i;
    }
}
console.log(`1~10 까지 짝수값을 더한 값: ${sum}`);
console.log(`1~10 까지 홀수값을 더한 값: ${sum2}`);
sum=0;
for(i=0;i<=10;i=i+2){
    sum=sum+i;
}console.log(`1~10 까지 짝수값을 더한 값: ${sum}`);

// =============================================
/* while 문

    while(조건식){
        //반복할 코드
    }
    -> 조건식 만족 -> 블럭({}) 내부 코드 실행
    ->내부 코드 실행 완료 -> 조건식으로 돌아가 반복여부 결정
        -if문: 조건식이 true이면 1번실행
        -while문: 조건식이 true인 경우 동안 계속 반복
                    ㄴ조건식 false이면 반복문 빠져나옴
*/
var n=1;//반복변수 초기값 설정
while(n<=5){        //조건식
    console.log(n);
    n++;//n=n+1;    //증감값
}
console.log('반복문 끝');

n=9;
while(n>4){
    console.log(n);
    n--;
}
console.log('---    new      ---');
n=1;
while(n<=10){
    if(n%2===0){
        console.log(n);
    }
    n++;
}
n=10;
while(n>=1){
    if(n%2!==0){
        console.log(n);
    }
    n--;
}
/*무한루프: 반복문에서 조건식의 결과각 항상 참이 되어 반복문을 탈출하지 못하는 상태
의도적으로 무한루프를 만들어 특정조건이 만족될때 까지 반복하면서 코드를 작성하기도 함

while(true){
    //탈출조건 만들기
}

조건문을 이용해 탈출조건을 만들어주고 break 사용해서 블록을 빠져나옴
*/

// let go = confirm('계속 진행할까요?');
// console.log(go);
//[확인] 누르면 true [취소] 누르면 false

var count = 0;
while(true){
    if(confirm('계속 진행하시겠습니까?')===true){
        alert(`${count}번째 반복입니다!`)
        count=count+1
    }
    else break;
}
console.log(count+'무한루트탈출 성공!')


let n1=0;
let s1=0, s2=0;
for(n1=1; n1<100; n1++){
    if(n%2===0){
        s1=s1+i;
    }
    else if(n%3===0){
        s2=s2+i;
    }
}
console.log(s1);
console.log(s2);
