import { useState, useEffect } from "react";
import Filter from "../Filter";
import Search from "../Search";

import Book from "./Book";
import { bookInfo } from "./bookInfo";

function BookGrid() {
    // const [bookData, setBookData] = useState([]);
    // NEEDS WORK: style the cards
    // const [filter, setFilter] = useState([]);

    // useEffect(() => {
    //     setFilter(filter);
    //   }, [filter]);

    const [genreFilter, setGenreFilter] = useState(null);
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        setBooks(bookInfo);
    }, [books]);

    return (
        // <div className="grid grid-rows-1 grid-flow-col gap-4">
        <>
            {/* <Search onSearchInput={test => console.log(test)} /> */}
            <Filter onFilterChange={genre => setGenreFilter(genre)} />
            <div className="m-8">
                <div className="grid place-items-center h-screen">
                    <div className="grid max-w-3xl grid-cols-3 gap-4">
                        {/* NEEDS WORK: add the ability to deselect a filter and set it back to normal
                                maybe add an all in the genre list and it defaults to all */}
                        {genreFilter && genreFilter !== 'all' ? (
                            bookInfo
                        .filter(book => book.genre.includes(genreFilter))
                        .map((book, index) => (
                            <Book 
                                key={index} 
                                title={book.title}
                                author={book.author}
                                description={book.description}
                                path={book.path}
                                genre={book.genre}
                            /> 
                        ))) : (
                            bookInfo.map((book, index) => (
                                <Book 
                                    key={index} 
                                    title={book.title}
                                    author={book.author}
                                    description={book.description}
                                    path={book.path}
                                    genre={book.genre}
                                />
                            )))
                        }
                    </div>
                </div>
            </div>
        </>       
    )
}

export default BookGrid;