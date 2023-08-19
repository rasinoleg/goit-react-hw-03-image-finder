import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ item }) {
  const { webformatURL } = item;
  const [shownModal, setShownModal] = useState(false);

  const onModal = () => {
    setShownModal(!shownModal);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={onModal}
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt="img"
      />
      {shownModal && <Modal onClose={onModal} image={item} />}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;

