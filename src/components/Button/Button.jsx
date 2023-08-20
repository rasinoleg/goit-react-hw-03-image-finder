import React from 'react';
import css from '../Button/Button.module.css' 
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className={css.ButtonContainer}>
     <button className={css.ButtonLoad} onClick={onClick}>
      Load more
    </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
