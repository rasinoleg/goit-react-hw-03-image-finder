import React, { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';
// import axios from 'axios';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    const { autoComplete, autoFocus, placeholder } = this.props;
    const { query } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            value={query}
            onChange={this.handleChange}
            name="query"
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            placeholder={placeholder}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;