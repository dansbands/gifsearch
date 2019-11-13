/**
 *
 * Layout
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
import SiteContent from 'components/SiteContent';
import makeSelectLayout from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header />
        <SiteContent>{children}</SiteContent>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const mapStateToProps = createStructuredSelector({
  layout: makeSelectLayout(),
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

const withReducer = injectReducer({ key: 'layout', reducer });
const withSaga = injectSaga({ key: 'layout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Layout);
