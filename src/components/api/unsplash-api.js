import axios from "axios";

const ACCESSKEY = '31h48PTl6HlP3IAG0CfqrB9Xdvq8tlSD4c2_bpsYcCU';

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchPhotos = async ({ page, per_page, query }) => {
  const response = axios.get(`/photos?client_id=${ACCESSKEY}&page=${page}&per_page=${per_page}&query=${query}`);
  //return (await response).data;
  return await response;
};