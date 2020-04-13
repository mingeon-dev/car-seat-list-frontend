import React from 'react';
import { Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <>
      <Route component={ProductListPage} path="/" exact />
      <Route component={ProductPage} path="/:productId" />
    </>
  );
};

export default App;
