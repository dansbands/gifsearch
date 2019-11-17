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

import styled from 'styled-components';
import GifCard from 'containers/GifCard';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGifGrid from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GifGrid(props) {
  console.log({ props });
  const { gifs } = props;

  const GifGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  function checkSelected(gifs, favorites) {
    console.log({ favorites });
    gifs.map(gif => {
      if (favorites.find(fav => fav.id === gif.id)) {
        gif.selected = true
        return gif;
      }
      gif.selected = false
      return gif;
    });
    return gifs;
  }

  function renderGifs(gifsToRender, favorites) {
    if (gifsToRender && gifsToRender.data) {
      let newData = gifsToRender.data;
      newData = checkSelected(gifsToRender.data, favorites);
      console.log(newData);
      // const { data } = gifsToRender;
      // console.log({ data });
      return newData.map(gif => {
        const { images, id, selected } = gif;
        const { fixed_height } = images;
        const { height, width, url } = fixed_height;
        return (
          <GifCard
            key={id}
            src={url}
            height={height}
            width={width}
            selected={selected}
            gif={gif}
          />
        );
      });
    }
    return null;
  }

  console.log({ props });
  return <GifGrid>{renderGifs(gifs.gifList, gifs.favorites)}</GifGrid>;
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
