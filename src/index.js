import React from "react";
import ReactDOM from "react-dom";
import './style.css'


const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL254_SR254,254_.jpg",
  title: "I Love You to The Moon and Back",
  author: "Amelia Hepworth"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL127_SR127,127_.jpg",
  title: "The Women: A Novel",
  author: "Ameliy Brown"
}

function AmazonBooks() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))