// import React, { Component } from 'react';
// import Searchbar from '../components/Searchbar/Searchbar';
// import ImageGallery from '../components/ImageGallery/ImageGallery';
// import Button from '../components/Button/Button';
// import Loader from '../components/Loader/Loader';
// import {fetchQuizzes} from '../components/Api'
// import { getImages } from '../components/Api';
// // import Notiflix from 'notiflix';

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     pege: 1,
//     loaing: false,
//   };

//   changeQuery = newQuery => {
//     this.setState({
//       query: `${Date.now()}/${newQuery}`,
//       images: [],
//       page: 1
//     });
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.query !== this.state.query ||
//       prevState.page !== this.state.page
//     ) {
//       console.log(`HTTP ${this.state.query}, и page=${this.state.page}`)
//     };
//     this.setState({loading: true})
//     const quizItems = await fetchQuizzes();
//     this.setState({
//       quizItems,
//       loading: false,
//     });
    
//   }

//   hendleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <Searchbar onSubmit={newQuery => this.changeQuery(newQuery)} />
//         </div>
//         <ImageGallery images={this.state.images} />
//         <div>
//           <Loader />
//         </div>
//         <div>
//           <Button onClick={this.hendleLoadMore} />
//         </div>
//       </div>
//     );
//   }
//   async function loadMoreImages(searchQuery) {
//     lightbox.refresh();
//   const { hits, total } = await searchImages(searchQuery, currentPage);
//   const photos = hits
//     .map(({ likes, webformatURL, downloads, views, comments }) => {
//       return `<div class="photo-card">
//           <a href="${webformatURL}" data-lightbox="gallery">
//             <img src="${webformatURL}" alt="" loading="lazy" />
//           </a>
//           <div class="info">
//             <p class="info-item">
//               <b>Likes:</b> ${likes}
//             </p>
//             <p class="info-item">
//               <b>Views:</b> ${views}
//             </p>
//             <p class="info-item">
//               <b>Comments:</b> ${comments}
//             </p>
//             <p class="info-item">
//               <b>Downloads:</b> ${downloads}
//             </p>
//           </div>
//         </div>`;
//     })
//     .join('');
// }

// export default App;


import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { fetchQuizzes } from '../components/Api'; // Перевірте шлях до Api

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log(`HTTP ${this.state.query}, and page=${this.state.page}`);
    }
    
    this.setState({ loading: true });
    
    try {
      const quizItems = await fetchQuizzes();
      this.setState({
        quizItems,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      this.setState({ loading: false });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <div>
          <Searchbar onSubmit={newQuery => this.changeQuery(newQuery)} />
        </div>
        <ImageGallery images={this.state.images} />
        <div>
          <Loader />
        </div>
        <div>
          <Button onClick={this.handleLoadMore} />
        </div>
      </div>
    );
  }
}

export default App;
