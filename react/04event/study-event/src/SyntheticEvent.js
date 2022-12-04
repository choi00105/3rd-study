import {useState} from 'react';

const SyntheticnEvent = () => {

  const [text, setText] = useState('초기값');

  const printSyntheticEvent = (e) => console.log(e);
  const setInputValue = (e) => setText(e.target.value);
  // const setInputValue = (e) => setText('232323');
  const showAlert = (e) => {
    alert(`input 입력값은 ${text}!!!`);
    setText('');
  };
  const onKeyPress = (e) => {
    if(e.key ==='Enter') {
      showAlert();
    }
  };

  return (
    <div>
      <button onClick={printSyntheticEvent}>SyntheticnEvent 확인</button>
      <br/>
      <input type="text" placeholder="입력하세요" 
      onChange={setInputValue} value={text}
      onKeyPress={onKeyPress}/>

    <button onClick={showAlert}>버튼</button>
    </div>
  );
}

export default SyntheticnEvent;