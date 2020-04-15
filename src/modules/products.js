import { createAction, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'products/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);

const initialState = {};

const products = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default products;
