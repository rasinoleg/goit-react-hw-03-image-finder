import Searchbar from '../components/Searchbar/Searchbar'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
// import axios from 'axios';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Searchbar />
     <ImageGallery/>
     <Button/>
     <Loader/>
    </div>
  );
  
};
