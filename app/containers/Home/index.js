/**
 *
 * Home
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
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getGifs as getGifsAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
class Home extends React.Component {
  state = { searchTerm: '' };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.getGifs(searchTerm);
  };

  render() {
    // console.log(this.state);
    console.log(this.props);
    const { searchTerm } = this.state;
    return (
      <Layout>
        <main>Home</main>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={searchTerm} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </Layout>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  getGifs: PropTypes.func,
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

const withReducer = injectReducer({ key: 'gifs', reducer });
const withSaga = injectSaga({ key: 'gifs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
