import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <hr />
      <FuncComponent name="kdt 3기" students={25}></FuncComponent>
      <FuncComponent ></FuncComponent>

      <hr />
      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <Button ></Button>
    </div>
  );
}

export default App;
