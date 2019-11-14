/*
 *
 * Home actions
 *
 */

import {
  GET_GIFS_START,
  GET_GIFS_SUCCESS,
  GET_GIFS_FAILURE,
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
