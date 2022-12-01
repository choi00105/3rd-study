import PropTypes from 'prop-types';

function FuncComponent (props)  {
  const teachar = '션';
  // console.log(props);
  const { name, students } = props;

  return (
    <div>
      <h1>Hi {teachar}</h1>
      <p>여기는 Functional Component!!</p>
      <p>{name} 수업시간 학생수는 {students}명 입니다</p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name : '야호',
};
FuncComponent.propTypes = {
  name : PropTypes.string,
  students : PropTypes.number.isRequired,
};

export default FuncComponent;