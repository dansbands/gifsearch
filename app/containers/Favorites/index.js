/**
 *
 * Favorites
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Header from 'components/Header';
import makeSelectFavorites from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class Favorites extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>Favorites</main>
      </Fragment>
    );
  }
}

Favorites.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  favorites: makeSelectFavorites(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'favorites', reducer });
const withSaga = injectSaga({ key: 'favorites', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Favorites);
