import { useState } from "react";

import { bookInfo } from "./books/bookInfo";

const GENRES = [ "fiction", "fantasy", "nonfiction", "thriller", "business" ];

const Search = () => {
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
        // <button onClick={filter}>Test</button>
        <>
            <div className="flex items-center justify-center">
                <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    {GENRES.map((genre, index) => (
                        <button 
                            id={index}
                            type="button" 
                            onClick={filter} 
                            value={genre}
                            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white 
                                font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 
                                focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">
                            {genre}
                        </button>
                    ))}
                    {/*NEEDS WORK: saving these buttons to fix the styling of the inline buttons, eventually */}
                    {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Middle</button>
                    <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Right</button> */}
                </div>
            </div>
            {/* NEEDS WORK: now use this filtering to actually filter the books, look at code in search to maybe figure this out */}
        </>   
    )
};

export default Search;