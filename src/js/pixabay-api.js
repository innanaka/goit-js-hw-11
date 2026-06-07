import axios from 'axios';

const API_KEY = '56116338-e065c09dde8a76b57de900d0e';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get('https://pixabay.com/api/', { params: searchParams })
    .then(response => response.data);
}