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
    console.log(this.props);
    const { getGifs } = this.props;
    const { home, favorites } = this.props;
    return (
      <Layout className="main-container" >
        <h3>Favorites</h3>
        {/*
          <SearchForm getGifs={getGifs} />
          */}
        <GifGrid gifs={favorites} />
      </Layout>
    );
  }
}

Favorites.propTypes = {
  getGifs: PropTypes.func,
  home: PropTypes.object,
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
