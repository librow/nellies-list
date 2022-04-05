import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
    return (
        <div class="m-4">
            <div class="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div class="relative"> <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 shadow-lg form-control focus:shadow focus:outline-none" placeholder="Search anything..." />
                    {/* <div class="absolute top-4 right-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> */}
                    <div class="absolute top-4 right-3"> <FontAwesomeIcon icon={faSearch} color="#f8c146" /> </div>
                </div>
            </div>
        </div>
        // <div class="container justify-content-center">
        //     <div class="row">
        //         <div class="col-md-8">
        //             <div class="input-group mb-3"> <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
        //                 {/* <div class="input-group-append"> <button class="btn btn-outline-warning btn-lg" type="button"><i class="fas fa-search"></i></button> </div> */}
        //                 {/* <div class="input-group-append"> <button class="btn btn-outline-warning btn-lg" type="button"><FontAwesomeIcon icon={faSearch} color="yellow" /></button> </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
};

export default Search;