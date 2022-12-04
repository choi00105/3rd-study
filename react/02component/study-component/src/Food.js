import PropTypes from 'prop-types';

function Food (props)  {
  const { name } = props;

  return (
    <div style={{
      color: 'red',
    }}>
      <p>{name} 는 맛있는 단백질 보충원입니다.</p>
    </div>
  );
}

Food.defaultProps = {
  name : '고기',
};
Food.propTypes = {
  name : PropTypes.string,
};

export default Food;