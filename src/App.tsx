import { books } from "./data/books";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Pages & Perspectives</h1>
        <p>Tamil books worth discovering</p>
      </header>

      <main>
        <section className="book-gallery">
          {books.map((book) => (
            <a
              className="book-card"
              href={book.url}
              key={book.id}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={book.image}
                alt={book.title}
                className="book-cover"
              />

              <div className="book-info">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
