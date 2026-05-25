import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "2108e007807af56b3588464934bf6a69";

// function ترجع request
const getTrendingVideos = () =>
  axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

// export object بشكل صحيح
const GlobalApi = {
  getTrendingVideos,
};

export default GlobalApi;
