/**
 *
 * SearchForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class SearchForm extends React.Component {
  state = { searchTerm: '' };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.getGifs(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={searchTerm} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  getGifs: PropTypes.func,
};

export default SearchForm;
