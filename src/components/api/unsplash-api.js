import axios from "axios";

const ACCESSKEY = '31h48PTl6HlP3IAG0CfqrB9Xdvq8tlSD4c2_bpsYcCU';

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const getFetchUrl = ( page, per_page, query) => {
  return `/photos?client_id=${ACCESSKEY}&page=${page}&per_page=${per_page}&query=${query}`;
}
