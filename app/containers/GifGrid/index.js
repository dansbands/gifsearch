/**
 *
 * GifGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGifGrid from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GifGrid() {
  useInjectReducer({ key: 'gifGrid', reducer });
  useInjectSaga({ key: 'gifGrid', saga });

  return <div />;
}

GifGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  gifGrid: makeSelectGifGrid(),
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

export default compose(withConnect)(GifGrid);
