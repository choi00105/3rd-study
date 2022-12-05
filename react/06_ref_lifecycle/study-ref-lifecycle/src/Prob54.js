import { useState , useRef} from 'react';

const Prob54 = () => {
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  // comment list state
  const [comments, setComments] = useState([
    { writer: '민수', title: '안뇽' },
    { writer: '지민', title: '하이하이' },
    { writer: '희수', title: '멋쟁이' },
  ]);

  const addComment = () => {
    // // 1.comments state에 추가할 원소 만들기 {writer:xxx, title:xxx}
    let newComments = { writer: inputWriter, title: inputTitle};
    console.log(newComments);
    if(newComments.writer.trim().length<1){
        handleFocus1();
    }else if(newComments.title.trim().length<1){
        handleFocus2();
        
    }else{

    setComments([...comments, newComments]);
    setInputTitle('');
    setInputWriter('');
    }
  };

  //////////////////
  const writerRef = useRef();
  const titleRef = useRef();

  const handleFocus1 = () => {
    console.log(writerRef.current); // <input type="text" placeholder="Enter something" />
    writerRef.current.focus();
  };
  const handleFocus2 = () => {
    console.log(titleRef.current); // <input type="text" placeholder="Enter something" />
    titleRef.current.focus();
  };
  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
        ref={writerRef}
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
        ref={titleRef}

          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c, idx) => {
            // c = { writer: xxx, title: xxx }
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{c.title}</td>
                <td>{c.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Prob54;