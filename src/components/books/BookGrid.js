import Book from "./Book";
import { bookInfo } from "./bookInfo";

function BookGrid() {
    // const [bookData, setBookData] = useState([]);
    // NEEDS WORK: style the cards
    const [filter, setFilter] = useState([]);

    return (
        // <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="m-8">
            <div className="grid place-items-center h-screen">
                <div className="grid lg:grid-cols-3 gap-4">
                    {bookInfo
                    // .filter(book => book.genre.includes('fiction'))
                    .map((book, index) => (
                        <Book 
                            key={index} 
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            path={book.path}
                            genre={book.genre}
                        /> 
                    ))}
                </div>
            </div>
        </div>        
    )
}

export default BookGrid;