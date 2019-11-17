import { put, select, takeLatest } from 'redux-saga/effects';
import config from 'utils/config';
import {
  getGifsSuccess,
  getGifsFailure,
  addFavoriteSuccess,
  addFavoriteFailure,
} from './actions';
import { GET_GIFS_START, ADD_FAVORITE_START } from './constants';

function* getGifs(action) {
  console.log(action);
  try {
    const url = `${config.apiRoot}?api_key=${config.apiKey}&q=${
      action.payload
    }`;
    const options = { method: 'GET' };
    const payload = yield fetch(url, options).then(res => res.json());
    // console.log({payload});
    yield put(getGifsSuccess(payload));
  } catch (error) {
    console.log({ error });
    yield put(getGifsFailure(error));
  }
}

function* addFavorite(action) {
  // console.log({action});
  try {
    yield put(addFavoriteSuccess(action.payload));
  } catch (error) {
    console.log({ error });
    yield put(addFavoriteFailure(error));
  }
}

export default function* getGifsSaga() {
  yield takeLatest(GET_GIFS_START, getGifs);
  yield takeLatest(ADD_FAVORITE_START, addFavorite);
}
