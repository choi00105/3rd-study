// 클래스형 컴포넌트에서 state 다루기
import React from 'react';
class Number extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }
  render() {
    //this state 데이터는 this.state로 접근가능
    const { number } = this.state; 


    return(
      <div>
        <h1>{number}</h1>
        <button onClick={() => this.setState({number: number + 2})}>+2</button>
        <button onClick={() => this.setState({number: number - 1})}>-1</button>
      </div>
    );
  }
}
export default Number;
