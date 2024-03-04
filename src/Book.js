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

export default Book;