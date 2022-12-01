import React from 'react';

class ClassComponent extends React.Component{
  //클래스형 컴포넌트에서는 render()필수
  render() {
    const teachar = 'Sean';

    return (
      <>
      <h1>hello, {teachar}</h1>
      <p>여기는 Class component!</p>
      </>
    );
  }
}

export default ClassComponent;