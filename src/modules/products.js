import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as productsAPI from '../lib/api/products';
import { takeLatest } from 'redux-saga/effects';

const LIST_PRODUCTS = 'products/LIST_PRODUCTS';
const LIST_PRODUCTS_SUCCESS = 'products/LIST_PRODUCTS_SUCCESS';
const LIST_PRODUCTS_FAILURE = 'products/LIST_PRODUCTS_FAILURE';

export const listProducts = createAction(
  LIST_PRODUCTS,
  ({ page, tag, company }) => ({
    page,
    tag,
    company,
  }),
);

const listProductsSaga = createRequestSaga(
  LIST_PRODUCTS,
  productsAPI.listProducts,
);
export function* productsSaga() {
  yield takeLatest(LIST_PRODUCTS, listProductsSaga);
}

const initialState = {
  products: null,
  error: null,
};

const products = handleActions(
  {
    [LIST_PRODUCTS_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      products,
    }),
    [LIST_PRODUCTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default products;
