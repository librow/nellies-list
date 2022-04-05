import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
    return (
        <div className="m-4">
            <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 shadow-lg form-control focus:shadow focus:outline-none" placeholder="Search anything..." />
                    {/* <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> */}
                    <div className="absolute top-4 right-3"> <FontAwesomeIcon icon={faSearch} color="#dc3c31" /> </div>
                </div>
            </div>
        </div>
        // <div className="container justify-content-center">
        //     <div className="row">
        //         <div className="col-md-8">
        //             <div className="input-group mb-3"> <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        //                 {/* <div className="input-group-append"> <button className="btn btn-outline-warning btn-lg" type="button"><i className="fas fa-search"></i></button> </div> */}
        //                 {/* <div className="input-group-append"> <button className="btn btn-outline-warning btn-lg" type="button"><FontAwesomeIcon icon={faSearch} color="yellow" /></button> </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
};

export default Search;