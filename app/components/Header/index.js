/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  SiteHeader,
  StyledSpan,
  StyledDiv,
  StyledH1,
  StyledText,
  HeaderRight
} from './styles';

// import PropTypes from 'prop-types';

function Header() {
  return (
    <SiteHeader>
      <Link to="/">
        <StyledH1>GifStash</StyledH1>
      </Link>

      <HeaderRight>
        <Link to="/">
          <StyledDiv>
            <StyledSpan className="mdi mdi-home" />
            <StyledText>Home</StyledText>
          </StyledDiv>
        </Link>{' '}
        <Link to="/favorites">
          <StyledDiv>
            <StyledSpan className="mdi mdi-heart" />
            <StyledText>Favorites</StyledText>
          </StyledDiv>
        </Link>
      </HeaderRight>
    </SiteHeader>
  );
}

Header.propTypes = {};

export default Header;
