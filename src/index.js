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
}

const Book = (props) => {
  const { img, title, author } = props.book
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => { console.log(title) }}>Click More</button>
    </article>
  )
}

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))