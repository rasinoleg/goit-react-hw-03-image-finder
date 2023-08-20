import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, onClickImage }) => {
  const { tags } = item;
  return (
    <li key={item.id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.previewURL}
        alt={tags}
        onClick={() =>
          onClickImage({
            img: item.previewURL,
            alt: tags,
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
