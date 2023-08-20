import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={css.ImageGallery}>
    {images.map(element => (
      <ImageGalleryItem
        key={element.id}
        item={element}
        onClickImage={onClickImage}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
