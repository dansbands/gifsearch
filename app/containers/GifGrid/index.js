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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGifGrid from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GifGrid(props) {
  const { gifs } = props;

  function renderGifs(gifsToRender) {
    let length = 0;
    if (gifsToRender.data) {
      const { data } = gifsToRender;
      console.log({ data });
      return data.map(gif => {
        const { images, id } = gif;
        const { fixed_height } = images;
        const { height, width, url } = fixed_height;
        return (
          <img key={id} src={url} height={height} width={width} alt="gif" />
        );
      });
    }
  }

  console.log({ props });
  return <div>{renderGifs(gifs)}</div>;
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

const withReducer = injectReducer({ key: 'gifGrid', reducer });
const withSaga = injectSaga({ key: 'gifGrid', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GifGrid);
