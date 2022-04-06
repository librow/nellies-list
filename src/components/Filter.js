import { useState } from "react";
import Book from "./books/Book";

import { bookInfo } from "./books/bookInfo";

const GENRES = [ "fiction", "fantasy", "nonfiction", "thriller", "business" ];

const Filter = ({onFilterChange}) => {
    // NEEDS WORK: add animation on the search and filter if time
    // OR add animation when scrolling and the cards come into view, fade in
    const [genre, setGenre] = useState('');

    // the search result
    const [foundGenre, setFoundGenre] = useState(GENRES);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = bookInfo.filter((book) => {
                return book.genre.includes(keyword);
            });
            setFoundGenre(results);
        } else {
            setFoundGenre(bookInfo);
        }

        setGenre(keyword);
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    {GENRES.map((genre, index) => (
                        <button 
                            key={index}
                            type="button" 
                            onClick={() => onFilterChange(genre)} 
                            value={genre}
                            className={`${index === 0 ? "rounded-l" : ""} ${index === (GENRES.length - 1) ? "rounded-r" : ""} inline-block px-6 py-2.5 filter-button text-white 
                                font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 
                                focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out`}>
                            {genre}
                        </button>
                    ))}
                    {/*NEEDS WORK: this is kind of a janky way to conditionally set the button rounded corners */}
                </div>
            </div>
        </>   
    )
};

export default Filter;