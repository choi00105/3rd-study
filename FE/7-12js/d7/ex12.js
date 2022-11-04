let no_1=1;
let no_2=2;
let no_3=3;
console.log(`no_1 is 1 no_2 is 2 no_3 is 3`);

function add(n1,n2,n3){
    let result =n1+n2+n3;
    console.log(`sum is ${result} !`);
    alert(`sum is ${result} !`);
}
add(no_1,no_2,no_3);

function sub(n1,n2){
    let result=n1-n2;
    console.log(`sub is ${result} !`);
    alert(`sub is ${result} !`);
}
sub(no_1,no_2);

function divide(n1,n2){
    let result=n1/n2;
    console.log(`divide is ${result}`);
    alert(`divide is ${result} !`);
}
divide(no_1,no_2);

function mul(n1,n2){
    let result=n1*n2;
    console.log(`mul is ${result}`);
    alert(`mul is ${result} !`);
}
mul(no_1,no_2);