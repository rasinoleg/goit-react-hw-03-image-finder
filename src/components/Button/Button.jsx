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

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};