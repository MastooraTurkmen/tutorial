import React from "react";
import ReactDOM from "react-dom";
import './style.css'

function AmazonBooks() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <>
      <Image />
      <Title />
      <Author />
    </>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL254_SR254,254_.jpg" alt="" />
const Title = () => <h1>I Love You to The Moon and Back</h1>
const Author = () => <h4>John Deo</h4>

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))