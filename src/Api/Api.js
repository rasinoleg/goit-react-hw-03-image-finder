import axios from 'axios';

const API_KEY = '38095076-ef3c552043c2b200806d48758';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

async function getImages({ query, page }) {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
}

export { getImages };



