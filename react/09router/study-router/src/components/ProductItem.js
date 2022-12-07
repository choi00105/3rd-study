const ProductItem = (props) => {
  const { product } = props;
  console.log('ProductItem >>> ');
  console.log(product);

  return (
    <ul className="ProductItem">
      <li>상품명: {product.name}</li>
      <li>상세설명: {product.body}</li>
    </ul>
  );
};

export default ProductItem;
