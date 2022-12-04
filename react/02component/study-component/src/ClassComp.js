import React from 'react';
import PropTypes from 'prop-types';

class ClassComp extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  
  valid() {
    return console.log('tq');
  }
  render() {
    const { text, valid } = this.props;
 console.log(this.props);

    return (
      <>
        <h1>App 컴포넌트에서 넘겨준 {text}입니다.</h1>
        <button onClick={valid}>콘솔메세지</button>
        {/* <button onClick={console.log({valid})}>콘솔메세지</button> */}
      </>
    );
  }

}


ClassComp.defaultProps = {
  text: '게 아닌 이건 기본 text props',
  // valid: '안 받고 콘솔 띄우기'
  
};

ClassComp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassComp;