/**
 *
 * SiteContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SiteContent({ children, className }) {
  return <main className={className}>{children}</main>;
}

SiteContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default SiteContent;
