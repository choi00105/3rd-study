import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';
import ClassComp from './ClassComp';


function App() {

  function valid(){
    return console.log('콘솔 띄우기 성공');
  }
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

      <hr />
      <h3>실습</h3>
      <Food name="물고기"></Food>
      <Food></Food>

      <Book 
      title="나의 하루는 4시 40분에 시작된다" 
      author="김유진"
      price="13,500"
      type="자기계발서"></Book>

    <ClassComp text="text 받아오는값" valid={valid}></ClassComp>
    <ClassComp></ClassComp>
    </div>
  );
}

export default App;
