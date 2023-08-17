import React, { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';



export class Searchbar extends Component {
  state = {
    inputData: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputData } = this.state;
    if (this.props.onSubmit) {
      this.props.onSubmit(inputData);
    }
  };

  handleChange = e => {
    this.setState({ inputData: e.target.value });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=""
            value={this.state.inputData}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
   
  }

}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
