/**
 *
 * GifCard
 *
 */

import React from 'react';
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

export function GifCard({ key, src, height, width }) {
  useInjectReducer({ key: 'gifCard', reducer });
  useInjectSaga({ key: 'gifCard', saga });

  const selected = false;

  const StyledDiv = styled.div`
    position: relative;
    padding: 10px;
    border: 1px solid lightgrey;
    color: white;
  `;

  const StyledSpan = styled.span`
    position: absolute;
    right: 10px;
    font-size: 50px;
  `;

  return (
    <StyledDiv>
      <img key={key} src={src} height={height} width={width} alt="gif" />
      <StyledSpan
        className={selected ? 'mdi mdi-heart' : 'mdi mdi-heart-outline'}
      />
    </StyledDiv>
  );
}

GifCard.propTypes = {
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
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GifCard);
