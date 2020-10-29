import axios from 'axios';

const KEY = 'AIzaSyC-pN13Gtvg6-bzRc_Rwu1cBZnxWwRTi44';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY,
  },
});
