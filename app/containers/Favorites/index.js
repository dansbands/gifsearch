/**
 *
 * Favorites
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Layout from 'containers/Layout';
import GifGrid from 'containers/GifGrid';
import makeSelectFavorites from './selectors';
import makeSelectHome from '../Home/selectors';
import reducer from '../Home/reducer';
import saga from '../Home/saga';
import { getGifs as getGifsAction } from '../Home/actions';

/* eslint-disable react/prefer-stateless-function */
class Favorites extends React.Component {
  render() {
    const { favorites, location } = this.props;
    return (
      <Layout className="main-container" location={location}>
        <GifGrid gifs={favorites} />
      </Layout>
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  favorites: makeSelectFavorites(),
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    getGifs: searchTerm => dispatch(getGifsAction(searchTerm)),
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
