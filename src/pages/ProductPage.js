import React from 'react';

const ProductPage = ({ match }) => {
  const { productId } = match.params;
  return <div>ProductId: {productId}</div>;
};

export default ProductPage;
