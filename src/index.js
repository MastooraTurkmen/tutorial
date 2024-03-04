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
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL254_SR254,254_.jpg" alt="" />
const Title = () => <h1>I Love You to The Moon and Back</h1>
const Author = () => <h4 style={{
  color: "#617d98",
  fontSize: "0.78rem",
  marginTop: "0.25rem"
}} >Amelia Hepworth</h4>

ReactDOM.render(<AmazonBooks />, document.getElementById('root'))