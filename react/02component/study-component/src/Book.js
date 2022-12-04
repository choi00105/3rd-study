import PropTypes from 'prop-types';

function Book (props)  {
  // console.log(props);
  const { title, author, price, type } = props;

  return (
    <div style={{backgroundColor:'lightyellow'}}>
      <h1 style={{color: 'orange'}}>이번주 베스트 셀러</h1>
      <img src="https://d2iwdqgro8i2ew.cloudfront.net/lesson/script/75512-1.png" alt="책 표지" style={{width: '80vw'}}/>
      <div style={{textAlign: 'left'}}>
        <h3>{title}</h3>
        <h4>저자: {author}</h4>
        <h4>판매가: {price}</h4>
        <h4>구분: {type}</h4>
      </div>
    </div>
  );
}

Book.defaultProps = {
  name : '야호',
};
Book.propTypes = {
  name : PropTypes.string,
  students : PropTypes.number.isRequired,
};

export default Book;