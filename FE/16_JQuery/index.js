console.log('!');

//  $(선택자).동작함수(); 형태
//jquery로 요소선택
console.log($('div'));
// 변수에 담기도 가능
let myDiv = $('div');
console.log(myDiv);

function submitjs(){
    document.querySelector('.div1').innerHTML= '반감습니다';
    document.querySelector('.div1').setAttribute('style', 'border: 2px solid red;');

}

function submitjquery(){
    $('.div1').text('반갑읍니다');
    $('.div1').css('border', '3px dotted blue');
}