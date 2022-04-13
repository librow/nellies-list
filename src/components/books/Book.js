
function Book({
    title,
    author,
    description,
    path,
    genre
}) {

    // Card Styling credit: https://larainfo.com/blogs/create-a-simple-responsive-card-grid-with-tailwind-css-examples
    return (
        <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
            <img className=""
                src={require(`../../assets/${path}`)} 
                alt={title} />
            <div className="px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{title}</h4>
                <p className="leading-normal text-gray-700">by {author}</p>
            </div>
        </div>
    );
}

export default Book;