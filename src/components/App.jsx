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
    hasLoaded: false, 
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
      hasLoaded: false, 
    // }, () => {
    //   this.fetchImages();
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

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    try {
      const data = await getImages({ query, page });
      this.setState(prevState => ({
        images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
        loading: false,
        hasLoaded: true, 
      }));
    } catch (error) {
      console.error("Error fetching images:", error);
      this.setState({ loading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
    };

    componentDidUpdate(prevProps, prevState) {
      if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
        this.fetchImages();
      }
    }

  render() {
    const { showModal, modalData, images, loading, hasLoaded } = this.state;
    
    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={images} onClickImage={this.openModal} />
        {loading && <Loader />}
        {hasLoaded && ( 
          <Button onClick={this.handleLoadMore} />
        )}
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


// import React, { Component } from 'react';
// import Searchbar from '../components/Searchbar/Searchbar';
// import ImageGallery from '../components/ImageGallery/ImageGallery';
// import Button from '../components/Button/Button';
// import Loader from '../components/Loader/Loader';
// import { getImages } from '../Api/Api'; 
// import Modal from '../components/Modal/Modal';

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     page: 1,
//     loading: false,
//     showModal: false,
//     modalData: null,
//     hasLoaded: false, 
//   };

//   changeQuery = newQuery => {
//     this.setState({
//       query: newQuery,
//       images: [],
//       page: 1,
//       hasLoaded: false, 
//     });
//   };

//   openModal = data => {
//     this.setState({
//       showModal: true,
//       modalData: data,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//       modalData: null,
//     });
//   };

//   fetchImages = async () => {
//     const { query, page } = this.state;
//     this.setState({ loading: true });

//     try {
//       const data = await getImages({ query, page });
//       this.setState(prevState => ({
//         images: page === 1 ? data.hits : [...prevState.images, ...data.hits],
//         loading: false,
//         hasLoaded: true, 
//       }));
//     } catch (error) {
//       console.error("Error fetching images:", error);
//       this.setState({ loading: false });
//     }
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }), () => {
//       this.fetchImages();
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
//       this.fetchImages();
//     }
//   }

//   render() {
//     const { showModal, modalData, images, loading, hasLoaded } = this.state;
    
//     return (
//       <div>
//         <Searchbar onSubmit={this.changeQuery} />
//         <ImageGallery images={images} onClickImage={this.openModal} />
//         {loading && <Loader />}
//         {hasLoaded && ( 
//           <Button onClick={this.handleLoadMore} />
//         )}
//         <div id="modal-root"> 
//           {showModal && (
//             <Modal image={modalData} onClose={this.closeModal} />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

