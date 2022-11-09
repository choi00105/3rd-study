const tbody = document.querySelector('tbody');
const form = document.forms['visitor-form'];
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록]버튼 클릭시 -> 테이블에 데이터 추가
function createVisitor() {
    console.log('등록버튼 누름');
    let strCheck = document.querySelector('#name').value.length;
    if (!strCheck){
        // 0! -> !false -> true
        alert('이름 기입!!!');
        clearInput();
        return;
    }
    if(!form.comment.value.length){
        // 0! -> !false -> true
        alert('방명록 기입!!!')
        clearInput();
        return;
    }
    
    if (strCheck > 10){
        alert('이름은 10 이하!!!');
        clearInput();
        return;
    }
    // 폼 선택
    console.log(form);
    console.log(form.name.value); // name input 값의 value
    console.log(form.comment.value); // comment input 값의 value
    // if(form.)
    axios({
        method: 'POST',
        url: '/visitor/write',
        data: {
            name: form.name.value,
            comment: form.comment.value,
        },
    }).then((res) => {
        console.log(res);
        console.log(res.data);
        return res.data;
    }).then((data) => {
        console.log(data);
        const html =`
        <tr id="tr_= ${data.id}">
            <td> ${data.id}</td>
            <td> ${data.name}</td>
            <td> ${data.comment}</td>
            <td><button type="button" onclick="editVisitor(${data.id});">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this, ${data.id});">삭제</button></td>
        </tr>
        `;
        // table에 추가된 정보를 바로 보여주기
        //data 객체에 담긴 값을 이용해서 tbody의 자식으로 tr 한줄이 추가되는 코드
        // js: insertAdjacentHTML()
        // jquuery: append()

        tbody.insertAdjacentHTML('beforeend', html);

        // input 초기화
        clearInput();
    });

}
// 테이블 내 [수정] 버튼 클릭시
//  -form input에 각각 이름, 방명록
//  -등록 버튼 없어지고 [변경], [취소] 버튼 대체
async function editVisitor(id) {
    console.log('edit visitor!!!');
    console.log('122 line : ', id);
    console.log(form); // 여까지

    // 1
    // axios 응답 결과를 reslt 라는 변수에 담고자 함 (동기 처리 필요)
    // result 변수에 한명에 대한 정보가 담아야 하니까
    //  -> axios 처리를 기다렸다가 result 라는 변수에 담아야함(동기 처리)
    //  -> async/ await 사용 하면 await를 만나서 promise가 처리될 때까지 기다려줌
    let result = await axios({
        method: 'GET',
        url: `/visitor/get?id=${id}`,
    }).then((res) => {
        console.log('1 :',res.data);
        return res.data;
        
    })
    console.log('2 방문자 하나 조회 결과: ', result);
    console.log('name: ', result.name);
    // 2
    const html = `
        <button type="button" onclick="editDo(${id});">변경</button>
        <button type="button" onclick="editCancel();">취소</button>
    `;
    buttonGroup.innerHTML = html;
    console.log(result.name);
    form.name.value = result.name;
    form.comment.value = result.comment;
}
//변경 버튼을 클릭 했을때 데이터 변경
function editDo(id) {
    console.log('변경클릭');
    console.log(form);
    console.log('name', form.name.value);
    
    axios({
        method: 'PATCH',
        url: '/visitor/edit',
        data: {
            id: id,
            name: form.name.value,
            comment: form.comment.value,
        },
    }).then((res) => {
        console.log(res);
        console.log(res.data);
        return res.data;
    }).then((data) => {
        alert(data);

        const children = document.querySelector(`#tr_${id}`).children; // 배열 크기 5 (tr이 5개 이기 때문)
        // jQuery ver
        // $(`#tr_${id}:nth-child(2)`).children.text(form.name.value);
        // $(`#tr_${id}:nth-child(3)`).children.text(form.comment.value);
        
        // js ver
        console.log('보고싶다',children);
        console.log('보고싶다2', form.name.value);
        children[1].textContent = form.name.value;
        children[2].textContent = form.comment.value;
        
    });

    const html =`<button type="button" onclick="createVisitor()">등록</button>`;
    buttonGroup.innerHTML = html;
    clearInput();
}
function editCancel() {
    console.log('캔슬 클릭');

    const html =`<button type="button" onclick="createVisitor()">등록</button>`;
    buttonGroup.innerHTML = html;
    clearInput();
}

// 삭제 버튼 클릭시 삭제 하는 함수
function deleteVisitor(obj, id) {
    console.log('삭제버튼 클릭')
    console.log(obj);
    console.log(id);
    if(!confirm('정말 삭제?')) {
        return;
    }

    axios({
        method: 'DELETE',
        url: '/visitor/delete',
        data: {
            id: id,
        },
    }).then((res) => {
        console.log(res.data);
        return res.data;
    }).then((data) => {
        // alert(data); // send한 '삭제 성공 !!!'' 출력

            // obj = this 삭제 버튼의 자기 자신
            obj.parentElement.parentElement.remove();
            alert(data);
            // closest() 매서드
            // obj.closest(`#tr_${id}`).remove(); //조상 찾기 간편
    });
}

// input 초기화 함수
function clearInput() {
    const form = document.forms['visitor-form'];
    form.name.value = '';
    form.comment.value = '';
}
