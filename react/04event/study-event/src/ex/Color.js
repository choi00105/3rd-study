import{useState} from 'react';

const Color =  () => {
  const [string, setText] = useState('검은색 입니다.');
  const [color, setColor] = useState();
  const Red = () => {
    setColor(styles1);
    setText('빨간색 입니다.');
  };
  const Blue = () => {
    setColor(styles2);
    setText('파란색 입니다.');
  };

  const styles1 = {
    color: 'red',
  }
  const styles2 = {
    color: 'blue',
  }

  return(
    <div>

      <h1 style={color}>{string}</h1>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>

    </div>
  );
}

export default Color;
