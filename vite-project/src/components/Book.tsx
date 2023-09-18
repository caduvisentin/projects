type BookProps = {
    books: {
        title: string,
        author: string,
        year: number,
        genre: string,
        image: string,
    }[]
}

function Book({ books }: BookProps) {

    return (
        <>
            {books.length > 0 ? (
                books.map((e) => (
                    <div key={e.title} className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>{e.title}</h2>
                            <span rel="author">{e.author}</span>
                        </div>
                        <div className="card-body">
                            <time>{e.year}</time>
                            <small className="d-block">{e.genre}</small>
                            <img className="img-fluid" src={e.image} alt={e.title} />
                        </div>
                        
                    </div>
                    </div>
                ))
            ) : (<h3>Sem livros</h3>)}
        </>
    )
}

export default Book;