import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { getImages } from '../Api/Api'; 
import Modal from '../components/Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalData: null,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  openModal = data => {
    this.setState({
      showModal: true,
      modalData: data,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalData: null,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });

      try {
        const data = await getImages({ query, page });
        this.setState({
          images: [...prevState.images, ...data.hits],
          loading: false,
        });
        console.log(data.hits)
      } catch (error) {
        console.error("Error fetching images:", error);
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showModal, modalData, images, loading } = this.state;
    
    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={images} onClickImage={this.openModal} />
        {loading && <Loader />}
        <Button onClick={this.handleLoadMore} />
        <div id="modal-root"> 
          {showModal && (
            <Modal image={modalData} onClose={this.closeModal} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

