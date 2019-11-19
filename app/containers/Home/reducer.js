/*
 *
 * Home reducer
 *
 */
// import produce from 'immer';
import {
  GET_GIFS_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_SUCCESS,
} from './constants';

export const initialState = { favorites: [], gifList: {} };

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GIFS_SUCCESS:
      return { ...state, gifList: action.payload };
    case ADD_FAVORITE_SUCCESS:
      state.favorites.push(action.payload);
      return state;
    case REMOVE_FAVORITE_SUCCESS:
      const newState = state.favorites.filter(
        item => item.id !== action.payload.id,
      );
      state = { ...state, favorites: newState };
      return state;
    default:
      return state;
  }
}

export default homeReducer;
