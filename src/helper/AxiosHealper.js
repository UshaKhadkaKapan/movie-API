import axios from "axios";
const api = "http://www.omdbapi.com/?apikey=40fbc8a3&";

export const fetchMovie = (title) => {
  return axios.get(api + "t=" + title);
};
