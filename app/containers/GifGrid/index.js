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
  const { gifs, isFullSearch } = props;
  console.log({ gifs });

  const GifGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media (min-width: 375px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: space-between;
      justify-content: space-between;
    }
  `;

  function checkSelected(gifs, favorites) {
    // console.log({ favorites });
    gifs.map(gif => {
      if (favorites.find(fav => fav.id === gif.id)) {
        gif.selected = true;
        return gif;
      }
      gif.selected = false;
      return gif;
    });
    return gifs;
  }

  function renderGifs(gifsToRender, favorites) {
    // console.log({ gifsToRender });
    if (gifsToRender && gifsToRender.data) {
      let newData = gifsToRender.data;
      newData = checkSelected(gifsToRender.data, favorites);

      // console.log(newData);
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

  function renderFavorites(gifsToRender) {
    const newData = [];

    gifsToRender.forEach(gif => {
      if (!newData.length) {
        newData.push(gif)
      }
      const stringyData = JSON.stringify(newData)
      const stringyGif = JSON.stringify(gif)
      if (!stringyData.includes(stringyGif)) {
        newData.push(gif)
      }
      // newData.forEach(item => {
      //   if (item.id !== gif.id) {
      //     newData.push(gif)
      //   }
      // })
    });
    console.log({ newData });
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

  // console.log({ props });
  if (isFullSearch) {
    return <GifGrid>{renderGifs(gifs.gifList, gifs.favorites)}</GifGrid>;
  }
  return <GifGrid>{renderFavorites(gifs.favorites)}</GifGrid>;
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
