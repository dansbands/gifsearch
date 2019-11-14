/*
 *
 * Home reducer
 *
 */
// import produce from 'immer';
import { GET_GIFS_SUCCESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
function homeReducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case GET_GIFS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default homeReducer;
