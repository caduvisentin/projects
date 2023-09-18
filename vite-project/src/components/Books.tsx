import data from "./data";
import Book from "./Book";

function Books() {
    return (
        <>

            <div className="container">
                <div className="row">

                    <Book
                        books={data}
                    />

                </div>
            </div>
        </>
    )
}

export default Books;