import React from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
function ImageGalleryItem({ item }) {
  const { id, webformatURL, tags } = item;

  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={this.onModal}
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
      {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
    </li>
    
  );
}


ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  
};

export default ImageGalleryItem;
