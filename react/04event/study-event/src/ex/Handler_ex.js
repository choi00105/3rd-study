// 클래스형 컴포넌트에서 state 다루기
import React from 'react';
class Hendler_ex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      string: 'hello World!',
    };
  }
  printGood = (e) => {
    // this.setText('GoodBye')
    this.state = {
      string: 'Goodbye World!',
    };
    console.log(this.state);
  };

  render() {
    let { string } = this.state; 
    console.log(this.state)

    return(
      <div>
        <h1>{string}</h1>

        <button onClick={this.printGood}>good</button>
        {/* <h1>{string}</h1> */}
        
        
      </div>
    );
  }

}

export default Hendler_ex;