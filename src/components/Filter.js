import { useState } from "react";
import Book from "./books/Book";

import { bookInfo } from "./books/bookInfo";

const GENRES = [ "all", "fiction", "fantasy", "nonfiction", "thriller", "business" ];

const Filter = ({onFilterChange}) => {
    // NEEDS WORK: add animation on the search and filter if time
    // OR add animation when scrolling and the cards come into view, fade in
    const [selectedGenre, setSelectedGenre] = useState('');

    // the search result
    const [foundGenre, setFoundGenre] = useState(GENRES);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '' || 'all') {
            const results = bookInfo.filter((book) => {
                return book.genre.includes(keyword);
            });
            setFoundGenre(results);
        } else {
            setFoundGenre(bookInfo);
        }

        setSelectedGenre(keyword);
    };

    return (
        <>
            {/* NEEDS WORK: give credit to the css/tailwind person for the filter bar */}
            <div className="flex items-center justify-center">
                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    {GENRES.map((genre, index) => (
                        <button 
                            key={index}
                            type="button" 
                            onClick={() => onFilterChange(genre)} 
                            value={genre}
                            className={`${index === 0 ? "rounded-l" : ""} ${index === (GENRES.length - 1) ? "rounded-r" : ""} inline-block px-6 py-2.5 filter-button text-white 
                                font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 
                                focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out`}>
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
        </>   
    )
};

export default Filter;