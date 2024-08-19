import { useState } from "react";
import {
  ListItem,
  ListItemText,
  Pagination,
  CircularProgress,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const booksPerPage = 10;

  const fetchBooks = async (e) => {
    if (!query) return;

    var q = `https://openlibrary.org/search.json?q=${query}&limit=${booksPerPage}&page=${page}`;
    if (author) {
      q += `&author=${author}`;
    }
    var response = await fetch(q);
    setError("");
    setLoading(true);

    try {
      const data = await response.json();
      // console.log("data -->", data.docs);
      setBooks(data.docs);
      setTotalPages(Math.ceil((data.num_found || 0) / booksPerPage));
    } catch (error) {
      setError("API Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      fetchBooks(query);
    }, 200);

    setTimeoutId(newTimeoutId);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    fetchBooks(event);
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <li>
            <a href="/" style={{ color: "grey" }}>
              Home
            </a>
          </li>
          <li>
            <a href="/search" style={{ color: "grey" }}>
              Search
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.title}>Books Search</h1>
      </main>
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter book title"
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
            disabled={loading ? true : false}
          />
    
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
            disabled={loading ? true : false}
          />
          <button
            onClick={fetchBooks}
            style={{ padding: "0.5rem 1rem" }}
            disabled={loading ? true : false}
          >
            Search
          </button>
        </form>
      </div>

      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          textAlign: "center"
        }}
      >
        {loading && <CircularProgress />}

        {!loading && books.length === 0 && !error && (
          <Typography sx={{
            whiteSpace: "pre-wrap"
          }}>{`No books found. \nPlease use the search bar again to look for a specific book.`}</Typography>
        )}

        {!loading &&
          books.length > 0 &&
          books &&
          books.map((book) => (
            <ListItem key={book}>
              <ListItemText>{book.title}</ListItemText>
            </ListItem>
          ))}

        {books.length > 0 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
        )}
      </div>
    </div>
  );
}
