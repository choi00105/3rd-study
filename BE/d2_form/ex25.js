console.log('con');

function call(name) {
    setTimeout(function (){
        console.log(name);

    },1000);
}

function back(txt) {
    setTimeout(function (){
        console.log(txt);
    console.log(txt ,'을 실행했구나');

    },2000);
}
function hell(message) {
    setTimeout(function (){
        console.log(message);
    console.log('여기는', message);

    },3000);
}

async function exec() {
    await call('kim');
    await back('back');
    await hell('callback hell');
}

exec();
