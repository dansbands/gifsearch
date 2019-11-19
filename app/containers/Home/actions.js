/*
 *
 * Home actions
 *
 */

import {
  GET_GIFS_START,
  GET_GIFS_SUCCESS,
  GET_GIFS_FAILURE,
  ADD_FAVORITE_START,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  REMOVE_FAVORITE_START,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAILURE,
} from './constants';

export function getGifs(searchString) {
  // console.log({searchString});
  return {
    type: GET_GIFS_START,
    payload: searchString,
  };
}

export function getGifsSuccess(payload) {
  return {
    type: GET_GIFS_SUCCESS,
    payload,
  };
}

export function getGifsFailure(error) {
  return {
    type: GET_GIFS_FAILURE,
    error,
  };
}

export function addFavorite(favorite) {
  // console.log({favorite});
  return {
    type: ADD_FAVORITE_START,
    payload: favorite,
  };
}

export function addFavoriteSuccess(payload) {
  return {
    type: ADD_FAVORITE_SUCCESS,
    payload,
  };
}

export function addFavoriteFailure(error) {
  return {
    type: ADD_FAVORITE_FAILURE,
    error,
  };
}

export function removeFavorite(favorite) {
  // console.log({favorite});
  return {
    type: REMOVE_FAVORITE_START,
    payload: favorite,
  };
}

export function removeFavoriteSuccess(payload) {
  return {
    type: REMOVE_FAVORITE_SUCCESS,
    payload,
  };
}

export function removeFavoriteFailure(error) {
  return {
    type: REMOVE_FAVORITE_FAILURE,
    error,
  };
}
