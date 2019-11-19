/**
 *
 * Home
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
import SearchForm from 'components/SearchForm';
import GifGrid from 'containers/GifGrid';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getGifs as getGifsAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  render() {
    // console.log(this.state);
    console.log(this.props);
    const { getGifs, home, location } = this.props;
    return (
      <Layout className="main-container" location={location}>
        <SearchForm getGifs={getGifs} />
        <GifGrid gifs={home} isFullSearch />
      </Layout>
    );
  }
}

Home.propTypes = {
  getGifs: PropTypes.func,
  home: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
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

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
