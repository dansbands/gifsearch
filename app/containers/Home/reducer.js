/*
 *
 * Home reducer
 *
 */
// import produce from 'immer';
import { GET_GIFS_SUCCESS, ADD_FAVORITE_SUCCESS } from './constants';

export const initialState = { favorites: [], gifList: {} };

/* eslint-disable default-case, no-param-reassign */
function homeReducer(state = initialState, action) {
  console.log('reducer', action);
  console.log({ state });
  switch (action.type) {
    case GET_GIFS_SUCCESS:
      return { ...state, gifList: action.payload };
    case ADD_FAVORITE_SUCCESS:
      state.favorites.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default homeReducer;
