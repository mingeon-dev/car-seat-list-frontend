import React from 'react';
import { Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';

const App = () => {
  return (
    <>
      <Route component={ProductListPage} path="/" exact />
    </>
  );
};

export default App;
