/**
 *
 * GifCard
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectGifCard from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  addFavorite as addFavoriteAction,
  removeFavorite as removeFavoriteAction,
} from '../Home/actions';

export function GifCard(props) {
  useInjectReducer({ key: 'gifCard', reducer });
  useInjectSaga({ key: 'gifCard', saga });

  const {
    key,
    src,
    height,
    width,
    gif,
    addFavorite,
    removeFavorite,
    selected,
  } = props;

  const [isSelected, toggleIsSelected] = useState(false || selected);

  const StyledDiv = styled.div`
    position: relative;
    padding: 20px;
    border: 1px solid lightgrey;
    color: white;
    @media (min-width: 375px) {
      margin: 0 auto;
    }
  `;

  const StyledSpan = styled.span`
    position: absolute;
    right: 25px;
    font-size: 50px;
  `;

  const handleClick = gifObj => {
    if (isSelected) {
      removeFavorite(gifObj);
    } else {
      addFavorite(gifObj);
    }
    toggleIsSelected(!isSelected);
  };

  // console.log({props});
  return (
    <StyledDiv onClick={() => handleClick(gif)}>
      <img key={key} src={src} height={height} width={width} alt="gif" />
      <StyledSpan
        className={
          isSelected || selected ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'
        }
      />
    </StyledDiv>
  );
}

GifCard.propTypes = {
  gif: PropTypes.object,
  addFavorite: PropTypes.func,
  key: PropTypes.string,
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  gifCard: makeSelectGifCard(),
});

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: favorite => dispatch(addFavoriteAction(favorite)),
    removeFavorite: favorite => dispatch(removeFavoriteAction(favorite)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GifCard);
