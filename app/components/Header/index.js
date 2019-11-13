/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const SiteHeader = styled.header`
  height: 100px;
  border-bottom: 1px solid black;
`;

function Header() {
  return (
    <SiteHeader>
      <h1>GifStash</h1>
      <Link to="/">Home</Link> <Link to="/favorites">Favorites</Link>
    </SiteHeader>
  );
}

Header.propTypes = {};

export default Header;
