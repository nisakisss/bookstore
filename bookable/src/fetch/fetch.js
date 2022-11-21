import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/books/"; // API URL

export const getAPIData = () => {
  return axios.get(API_URL).then((res) => res.data);
};

// create function to fetch data post to API
export const postAPIData = (book) => {
  return axios.post(API_URL, book).then((res) => res.data);
};

// create function to fetch data put to API
export const putAPIData = async (book) => {
  const res = await axios.put(API_URL, book);
  return res.data;
};

// create function to fetch data delete to API
export const deleteAPIData = (book) => {
  return axios.delete(API_URL, book).then((res) => res.data);
};
