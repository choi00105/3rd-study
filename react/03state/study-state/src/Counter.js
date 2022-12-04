// 클래스형 컴포넌트에서 state 다루기
import React from 'react';
class Conuter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 5,
    };
  }
  render() {
    //this state 데이터는 this.state로 접근가능
    const { number } = this.state; 


    return(
      <div>
        <h1>{number}</h1>
        <button onClick={()=> alert(number)}>alert</button>
        <button onClick={() => this.setState({number: 7})}>Set Number 7</button>
        <button onClick={() => this.setState({number: number+1})}>
          +1
        </button>
      </div>
    );
  }

}

export default Conuter;