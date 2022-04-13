const GENRES = [ "all", "fiction", "fantasy", "nonfiction", "thriller", "business" ];

const Filter = ({onFilterChange}) => {

    // Filter Button Styling credit: https://tailwind-elements.com/docs/standard/components/button-group/
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