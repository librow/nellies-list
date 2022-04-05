import Book from "./Book";
import { bookInfo } from "./bookInfo";

function BookGrid() {
    // const [bookData, setBookData] = useState([]);

    return (
        // <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="m-8">
            <div className="grid place-items-center h-screen">
                <div className="grid lg:grid-cols-3 gap-4">
                    {bookInfo.map((book, index) => (
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