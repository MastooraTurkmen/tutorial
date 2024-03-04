import React from "react";
import ReactDOM from "react-dom";
import './style.css'



const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL254_SR254,254_.jpg",
    title: "I Love You to The Moon and Back",
    author: "Amelia Hepworth"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL127_SR127,127_.jpg",
    title: "The Women: A Novel",
    author: "Ameliy Brown"
  }
]

function AmazonBooks() {
  return (
    <section className="booklist">{
      books.map((book) => {
        return <Book book={book} />
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
    </article>
  )
}

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))