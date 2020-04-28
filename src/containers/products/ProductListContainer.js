import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/products/ProductList';
import { listProducts } from '../../modules/products';

const ProductListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(({ products, loading }) => ({
    products: products.products,
    error: products.error,
    loading: loading['products/LIST_PRODUCTS'],
  }));
  useEffect(() => {
    const { page, tag, company } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listProducts({ page, tag, company }));
  }, [dispatch, location.search]);

  return <ProductList loading={loading} error={error} products={products} />;
};

export default withRouter(ProductListContainer);
