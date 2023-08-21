import React from 'react';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ item, onClickImage }) => {
  const { img } = item;
  return (
    <li key={item.id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.webformatURL}
        alt={img}
        onClick={() =>
          onClickImage({
            img: item.largeImageURL,
            alt: img,
          })
        }
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
