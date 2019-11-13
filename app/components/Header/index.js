/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <header>
      <h1>GifStash</h1>
      <Link to="/">Home</Link> <Link to="/favorites">Favorites</Link>
    </header>
  );
}

Header.propTypes = {};

export default Header;
