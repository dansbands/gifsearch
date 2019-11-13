import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the favorites state domain
 */

const selectFavoritesDomain = state => state.favorites || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Favorites
 */

const makeSelectFavorites = () =>
  createSelector(
    selectFavoritesDomain,
    substate => substate,
  );

export default makeSelectFavorites;
export { selectFavoritesDomain };
