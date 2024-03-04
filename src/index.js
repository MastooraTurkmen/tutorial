import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import books from "./books";
import Book from "./Book";

function AmazonBooks() {
  return (
    <>
      <h1 className="header">Amazon Books</h1>
      <section className="booklist">
        {
          books.map((book) => {
            return <Book key={book.id} book={book} />
          })
        }
      </section>
    </>
  )
};

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))