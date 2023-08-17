import css from '../Modal/Modal.module.css'
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const ModalRoot = document.querySelector('#ModalRoot');

function Modal({ image, onClose }) {
  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const onOverlayClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const { largeImageURL } = image;

  return createPortal(
    <div onClick={onOverlayClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
    ModalRoot
  );
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};