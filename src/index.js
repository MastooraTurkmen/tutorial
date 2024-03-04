import React from "react";
import ReactDOM from "react-dom";
import './style.css'
import books from "./books";

function AmazonBooks() {
  return (
    <section className="booklist">{
      books.map((book) => {
        return <Book key={book.id} book={book} />
      })
    }
    </section>
  )
};

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))