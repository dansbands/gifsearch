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
import { Link } from 'react-router-dom';

import GifCard from 'containers/GifCard';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGifGrid from './selectors';
import reducer from './reducer';
import saga from './saga';
import { StyledGrid, StyledDiv, StyledButton } from './styles';

/* eslint-disable no-param-reassign, camelcase */
export function GifGrid(props) {
  const { gifs, isFullSearch } = props;

  function checkSelected(gifsToRender, favorites) {
    gifsToRender.map(gif => {
      if (favorites.find(fav => fav.id === gif.id)) {
        gif.selected = true;
        return gif;
      }
      gif.selected = false;
      return gif;
    });
    return gifsToRender;
  }

  function renderGifs(gifsToRender, favorites) {
    if (gifsToRender && gifsToRender.data) {
      let newData = gifsToRender.data;
      newData = checkSelected(gifsToRender.data, favorites);

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
        newData.push(gif);
      }
      const stringyData = JSON.stringify(newData);
      const stringyGif = JSON.stringify(gif);
      if (!stringyData.includes(stringyGif)) {
        newData.push(gif);
      }
    });

    return newData.length ? (
      newData.map(gif => {
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
      })
    ) : (
      <StyledDiv>
        <span>No Favorites Yet!</span>
        <br />
        <StyledButton type="button">
          <Link to="/">Search for Gifs</Link>
        </StyledButton>
      </StyledDiv>
    );
  }

  if (isFullSearch) {
    return <StyledGrid>{renderGifs(gifs.gifList, gifs.favorites)}</StyledGrid>;
  }
  return <StyledGrid>{renderFavorites(gifs.favorites)}</StyledGrid>;
}

GifGrid.propTypes = {
  gifs: PropTypes.object,
  isFullSearch: PropTypes.bool,
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
