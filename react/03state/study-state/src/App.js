import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction'
import CounterFunction from './CounterFunction'
import Number from './Number'
import NumberFunc from './NumberFunc'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <SayFunction></SayFunction>
      <CounterFunction value="일 더하기"></CounterFunction>
      <Number></Number>
      <NumberFunc></NumberFunc>
    </div>
  );
}

export default App;
