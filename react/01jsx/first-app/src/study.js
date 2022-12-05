// improt로 정의
import logo from './logo.svg';
import './App.css';

// 만들고
function App() {
  const name = 'sean';
  // let flag = true;
  let flag = false;
  let txt = '';

  if(flag){
    txt = '참입니다';
  }else {
    txt = '거짓입니다.';
  }

  const styles = {
    backgroundColor: 'blue',
    color: 'red',
    fontSize: '40px'
  }
  return (
//  JSX 문법
//  1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로 감싸야 함
// JSX 주석은 /*  */
// 2. {}로 감싸면 js표현식 사용가능 if for 사용 못함 3항연산자는 가능
// 3. style 속성
    // -dom 요소에 스타일 적용시 문자열 x -> "객체" 사용
    // -스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야함
    <div className="App">
      <h1 style={styles}>안뇽 {name}</h1>
      
      <h2 style={{
    backgroundColor: 'blue',
    color: 'red',
    fontSize: '40px'
  }}>{name == 'sean' ? '반가워' : '누구?'}</h2>

      <h1 style={styles.h2}>안뇽 {name}</h1>

      <h3>{txt}</h3>
      <p>{flag ? <h3>트루</h3> : <span>거짓</span>}</p>

  {/* 4. class 말고 className 속성도 camelCase*/}
      <h3 className="hello">hello!! </h3>


  {/* 5. 종료 태그가 없는 태그의 사용
      기존 hrml에서 종료태그가 없더라도 종료 태그를 작성해야함 or self-closing 
      <br> x -> <br/>
      */}
      
      </div>
  );
}
// 내보내기
export default App;
