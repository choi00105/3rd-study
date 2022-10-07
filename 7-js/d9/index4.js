/* swith4
    -하나 이상의 case문으로 구성
    -default 문이 있는데 필수 x -> 작성권장
    -break 키워드: 블록(중괄호{})을 빠져나가는데사용하는 키워드

    switch(x){
        case 값1:( == if(x==값))
        break;
        case 값2
    }

*/
let a= 2+2;

switch(a){
    
    case 1: //값의 자리에 수식 X 값만 O
    case 2:
    case 3:
        console.log('비교하려는 값보다 작습니다.');
        break;
    case 4:
        console.log('비교하려는 값과 일치합니다.');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('비교하려는 값보다 큽니다.');
        break;
    default:
        console.log('어떤 값인지 파악 안됨');
        break;
}

if(a===3){
    console.log('비교하려는 값보다 작습니다');
}else if(a===4){
    console.log('비교하려는 값과 일치합니다');
}else if(a===5){
    console/log('비교하려는 값보다 큽니다.');
}else{
    console.log('오류발생')
}

var grade='A';
switch(grade){
    case 'A': console.log('학점 A');
        break;
    case 'B': console.log('학점 B');
        break;
    case 'C': console.log('학점 C');
        break;
    case 'D': console.log('학점 D');
        break;
    case 'F': console.log('학점 F');
        break;
    default: console.log('오류발생');
        break;
        
}
//====================================================================
/*삼항연산자
    -3개의 피연산자를 필요로함
    조건식?(참일떄 실행할 코드):(거짓일 때 실행할 코드)
    */
var num=3;
if(num%2===0){
    console.log('짝수');
}else console.log('홀수');

//짝홀 구별 삼항연산자

var result= num%2 ==0 ? '짝수임':'홀수임'
console.log(result);


var hour=10;
console.log(hour>=12?'오후':'오전');

let now = hour>=12?'오후':'오전';
console.log(now);