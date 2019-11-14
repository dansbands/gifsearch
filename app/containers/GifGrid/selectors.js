import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gifGrid state domain
 */

const selectGifGridDomain = state => state.gifGrid || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GifGrid
 */

const makeSelectGifGrid = () =>
  createSelector(
    selectGifGridDomain,
    substate => substate,
  );

export default makeSelectGifGrid;
export { selectGifGridDomain };
