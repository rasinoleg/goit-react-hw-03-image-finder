import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const { largeImageURL } = image;

  return createPortal(
    <div onClick={onOverlayClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};

export default Modal;

