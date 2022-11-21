import "./App.css";
import axios from "axios";
import Books from "./components/books";
import { useState, useEffect } from "react";
import PostBook from "./components/postBook";
import { getAPIData } from "./fetch/fetch";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
        items ? setLoading(false) : setLoading(true);
      }
    });
    return () => (mounted = false);
  }, []);

  if (loading) return "Loading..."; // if loading, return loading

  if (error) return "Error!"; // if error, return error

  return (
    <div className="App">
      <Books books={books} /> {/* pass books as props */}
      <PostBook />
    </div>
  );
}

export default App;
