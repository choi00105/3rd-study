import { useState } from 'react';

const CounterFunction = (props) => {
  const [number, setNumber] = useState(0);

  const plusOne = () => setNumber(number +1)
  const {value}= props
  console.log(props)
  return (
    <>  
      <h1>{number}</h1>
      <button onClick={plusOne}>{value}</button>
    </>
  );
};

export default CounterFunction;