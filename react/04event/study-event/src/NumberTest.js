import{useState} from 'react';

const NumberTest =  () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(msg);
  };

  const alertMsg2 = (evt, msg) => {
    console.log(evt.target);
    alert(msg);
  };

  return(
    <div>
      <h1>Conuter</h1>
      <h1>{number}</h1>
      <button onClick={onIncrease}>increase</button>

      <h1>Alert</h1>
      <button onClick={() => alertMsg('helloo')}>메세지 띄우기</button>
      <button onClick={(e) => alertMsg2(e, 'byeeeeee')}>메세지 띄우기</button>
      
    </div>
  );
}

export default NumberTest;
