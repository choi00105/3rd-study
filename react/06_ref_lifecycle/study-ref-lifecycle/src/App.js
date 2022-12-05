import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import Prob54 from './Prob54';
import LifeCycleFunc from './LifeCycleFunc';
import LifeCycleClass from './LifeCycleClass';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <RefSample1></RefSample1>
      <RefSample2></RefSample2> <hr/>
      <Prob54></Prob54>
      <LifeCycleFunc></LifeCycleFunc><hr/>
      <LifeCycleClass></LifeCycleClass>
      <hr/>
      <PostList></PostList>
    </div>
  );
}

export default App;
