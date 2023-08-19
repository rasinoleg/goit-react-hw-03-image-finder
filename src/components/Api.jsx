import axios from "axios";

const API_KEY = '38095076-ef3c552043c2b200806d48758'
axios.defaults.baseURL = 'https://pixabay.com/api'

const defaultParams = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    // safesearch: 'true',
    per_page: 12,
    // page: currentPage,
};
async function getImages({qure, page}) {
    const params = {
        ...defaultParams,
        q: qure,
        page: page,
    }
    const response = await axios.get('', { params });
    return response.data;
}

export  {getImages};

export const fetchQuizzes = async () => {
const response = await axios.get('/quixxes');
return response.data;
};

export default fetchQuizzes;