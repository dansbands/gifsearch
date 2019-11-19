import { put, takeLatest } from 'redux-saga/effects';
import config from 'utils/config';
import {
  getGifsSuccess,
  getGifsFailure,
  addFavoriteSuccess,
  addFavoriteFailure,
  removeFavoriteSuccess,
  removeFavoriteFailure,
} from './actions';
import {
  GET_GIFS_START,
  ADD_FAVORITE_START,
  REMOVE_FAVORITE_START,
} from './constants';

function* getGifs(action) {
  try {
    const url = `${config.apiRoot}?api_key=${config.apiKey}&q=${
      action.payload
    }`;
    const options = { method: 'GET' };
    const payload = yield fetch(url, options).then(res => res.json());
    yield put(getGifsSuccess(payload));
  } catch (error) {
    yield put(getGifsFailure(error));
  }
}

function* addFavorite(action) {
  try {
    yield put(addFavoriteSuccess(action.payload));
  } catch (error) {
    yield put(addFavoriteFailure(error));
  }
}

function* removeFavorite(action) {
  try {
    yield put(removeFavoriteSuccess(action.payload));
  } catch (error) {
    yield put(removeFavoriteFailure(error));
  }
}

export default function* getGifsSaga() {
  yield takeLatest(GET_GIFS_START, getGifs);
  yield takeLatest(ADD_FAVORITE_START, addFavorite);
  yield takeLatest(REMOVE_FAVORITE_START, removeFavorite);
}
