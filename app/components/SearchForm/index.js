/**
 *
 * SearchForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledButton } from './styles'

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
      <StyledForm className="example" onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          value={searchTerm}
          onChange={this.handleChange}
        />
        <StyledButton type="submit">
          <i className="fa fa-search" />
        </StyledButton>
      </StyledForm>
    );
  }
}

SearchForm.propTypes = {
  getGifs: PropTypes.func,
};

export default SearchForm;
