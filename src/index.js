import React from "react";
import ReactDOM from "react-dom";
import './style.css'



const books = [
  {
    img: "https://m.media-amazon.com/images/I/91afIYwE9BL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Exchange: After The Firm",
    author: "John Grisham"
  },
  {
    img: "https://m.media-amazon.com/images/I/81cc7Zt6fvL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Secret: A Jack Reacher Novel",
    author: "Lee Child"
  },
  {
    img: "https://m.media-amazon.com/images/I/81O4b-j4vnL._AC_UY327_FMwebp_QL65_.jpg",
    title: "First Lie Wins: A Novel",
    author: "Ashley Elston"
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL254_SR254,254_.jpg",
    title: "I Love You to The Moon and Back",
    author: "Amelia Hepworth"
  },
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