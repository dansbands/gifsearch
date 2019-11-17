import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gifCard state domain
 */

const selectGifCardDomain = state => state.gifCard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GifCard
 */

const makeSelectGifCard = () =>
  createSelector(
    selectGifCardDomain,
    substate => substate,
  );

export default makeSelectGifCard;
export { selectGifCardDomain };
