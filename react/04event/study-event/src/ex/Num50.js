import{useState} from 'react';

const Num50 =  () => {
  const [title, setTitle] = useState('안녕하세요');
  const [btn, setBtn] = useState('사라져라');
  console.log(Boolean({title}));
  console.log({title});
  console.log(title);

  const click = () => {
    if(!title){
      setTitle('안녕하세요');
      setBtn('사라져라');
    } else{
      
      setTitle('');
      setBtn('보여라');
    }
  console.log(title);
  console.log(Boolean({title}));

  };

  return(
    <div>

      <button onClick={click}>{btn}</button>
      <h1 >{title}</h1>
    </div>
  );
}

export default Num50;

// import { useState } from 'react';
// const Prob50 = () => {
//   const [visible, setVisible] = useState(true);

//   return (
//     <div>
//       {/* <h1>{visible ? '안녕하세요' : ''}</h1> */}
//       <h1>{visible && '안녕하세요'}</h1>
//       <button onClick={() => setVisible(!visible)}>
//         {visible ? '사라져라' : '보여라'}
//       </button>
//     </div>
//   );
// };

// export default Prob50;git