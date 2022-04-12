import { useState, useEffect } from "react";
import Filter from "../Filter";

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Book from "./Book";
import { bookInfo } from "./bookInfo";

function BookGrid() {
    const [genreFilter, setGenreFilter] = useState(null);
    const [books, setBooks] = useState(bookInfo);
    const [search, setSearch] = useState('');

    // NEEDS WORK: give credit to the guy for this code
    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = books.filter((book) => {
            return book.author.toLowerCase().includes(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setBooks(results);
        } else {
          setBooks(bookInfo);
          // If the text field is empty, show all users
        }
    
        setSearch(keyword);
    };

    return (
        <>
            {/* NEEDS WORK: give credit to the css/tailwind search bar */}
            <div className="container flex items-center justify-center m-10 px-4 sm:px-6 lg:px-8">
                <div className="relative"> 
                    <input 
                        type="text" 
                        className="h-14 w-96 pr-8 pl-5 rounded z-0 shadow-lg form-control focus:shadow focus:outline-none" 
                        value={search}
                        onChange={filter}
                        placeholder="Search authors.." 
                    />
                    <div className="absolute top-4 right-3"> 
                        <FontAwesomeIcon icon={faSearch} color="#dc3c31" /> 
                    </div>
                </div>
            </div>
            <Filter onFilterChange={genre => setGenreFilter(genre)} />
            <div className="m-8">
                <div className="grid place-items-center h-screen">
                    <div className="grid max-w-3xl grid-cols-3 gap-4">
                        {books && genreFilter && genreFilter !== 'all' ? (
                            books
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
                            books.map((book, index) => (
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