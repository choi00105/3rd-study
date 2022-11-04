function bodyColor0 () {
    document.body.style.backgroundColor = 'red';
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        },1000);
    });
}
function bodyColor1 () {
    document.body.style.backgroundColor = 'orange';
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        },1000);
    });
}
function bodyColor2 () {
    document.body.style.backgroundColor = 'yellow';
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        },1000);
    });
}
function bodyColor3 () {
    document.body.style.backgroundColor = 'green';
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        },1000);
    });
}
function bodyColor4 () {
    document.body.style.backgroundColor = 'blue';
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        },1000);
    });
}
bodyColor0()
    .then(function () {
        return bodyColor1();
    })
    .then(function () {
        return bodyColor2();
    })
    .then(function (){
        return bodyColor3();
    })
    .then(function (){
        return bodyColor4();
    });