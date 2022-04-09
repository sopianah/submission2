import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  //Favorite: `${CONFIG.BASE_URL}/favorite`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
