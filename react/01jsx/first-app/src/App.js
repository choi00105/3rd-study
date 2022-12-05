// improt로 정의
import './App.css';

// 만들고
function App() {
  let name="max";
  let animal="cat";

  let a=4;
  let b=2;

  let title="Hello World";

  return(
  <div className="App">
    {/* 이것은 div 입니다.
    <h3>이것은 div 안에 있는 h3태그</h3>

    <h2>제 반려 동물의 이름은 <span className="underLine">{name}</span>입니다. <br />
    <span className="underLine">{name}</span>은 <span className="underLine">{animal}</span>입니다.</h2>

    <p>3 + 5 =8 수식 맞나요? {3+8?'정답입니다!':'오답입니다!'}</p>

    <p>{a>b&&'a가 b보다 큽니다'}</p>

    <div className="test">{title}</div>
    <div className="input">
      <label htmlFor="id">아이디: </label>
      <input type="text" id="id" />
    </div>
    <div className="input">
      <label htmlFor="pw">비밀번호: </label>
      <input type="password" id="pw" />
    </div>
    <div className="box">
    <div className="red"></div>
    <div className="orange"></div>
    <div className="yellow"></div>
    <div className="green"></div>
    <div className="blue"></div>
    <div className="navy"></div>
    <div className="purple"></div>
    </div> */}


    <div className="circle c1"></div>
    <div className="circle c2"></div>
    <div className="circle c3"></div>
    <div className="circle c4"></div>
    <div className="circle c5"></div>
    <div className="circle cEye1"></div>
    <div className="circle cEye2"></div>
  </div>
  
  )
}
// 내보내기
export default App;
