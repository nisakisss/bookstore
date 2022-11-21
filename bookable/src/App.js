import "./App.css";
import axios from "axios";
import Books from "./components/books";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000/api/v1/books";

const getAPIData = () => {
  return axios.get(API_URL).then((res) => res.data);
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
