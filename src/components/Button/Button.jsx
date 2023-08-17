import React from 'react';
import css from '../Button/Button.module.css' 
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className={css.ButtonLoad} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};