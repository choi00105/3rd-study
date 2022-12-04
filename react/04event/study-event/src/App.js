import './App.css';
import SyntheticnEvent from './SyntheticEvent';
import NumberTest from './NumberTest';
import ClassBind from './ClassBind';
import Handler_ex from './ex/Handler_ex';
import Color from './ex/Color';
import Num50 from './ex/Num50';

function App() {
  return (
    <div className="App">
      <SyntheticnEvent></SyntheticnEvent>
      <NumberTest></NumberTest>
      <ClassBind></ClassBind>
      <Handler_ex></Handler_ex>
      <br></br>
      <Color></Color>
      <hr />
      <Num50></Num50>
    </div>
  );
}

export default App;
