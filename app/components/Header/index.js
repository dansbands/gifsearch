/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  SiteHeader,
  StyledSpan,
  StyledH1,
  StyledText,
  HeaderRight,
} from './styles';

function Header(props) {
  const {
    location: { pathname },
  } = props;

  const StyledDivOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    border-bottom: ${pathname === '/' ? '3px solid #3f9bff' : 'none'};
    padding: 10px 0;
    @media (min-width: 425px) {
      margin-left: 50px;
    }
  `;

  const StyledDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    border-bottom: ${pathname === '/favorites' ? '3px solid #3f9bff' : 'none'};
    padding: 10px 0;
    @media (min-width: 425px) {
      margin-left: 50px;
    }
  `;

  return (
    <SiteHeader>
      <Link to="/">
        <StyledH1>GifStash</StyledH1>
      </Link>

      <HeaderRight>
        <Link to="/">
          <StyledDivOne>
            <StyledSpan className="mdi mdi-home" />
            <StyledText>Home</StyledText>
          </StyledDivOne>
        </Link>{' '}
        <Link to="/favorites">
          <StyledDivTwo>
            <StyledSpan className="mdi mdi-heart" />
            <StyledText>Favorites</StyledText>
          </StyledDivTwo>
        </Link>
      </HeaderRight>
    </SiteHeader>
  );
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
