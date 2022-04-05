import { useState } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
  ];

const Search = () => {

    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = USERS.filter((user) => {
            return user.name.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
          });
          setFoundUsers(results);
        } else {
          setFoundUsers(USERS);
          // If the text field is empty, show all users
        }
    
        setName(keyword);
    };


    return (
        <>
            <div className="m-4">
                <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="relative"> <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 shadow-lg form-control focus:shadow focus:outline-none" placeholder="Search anything..." />
                        {/* <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> */}
                        <div className="absolute top-4 right-3"> <FontAwesomeIcon icon={faSearch} color="#dc3c31" /> </div>
                    </div>
                </div>
            </div>
             {/* <div className="container justify-content-center">
                 <div className="row">
                     <div className="col-md-8">
                         <div className="input-group mb-3"> <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                             <div className="input-group-append"> <button className="btn btn-outline-warning btn-lg" type="button"><i className="fas fa-search"></i></button> </div> 
                             <div className="input-group-append"> <button className="btn btn-outline-warning btn-lg" type="button"><FontAwesomeIcon icon={faSearch} color="yellow" /></button> </div>
                         </div>
                     </div>
                 </div>
             </div> */}
            <div className="container">
                <input
                    type="input"
                    value={name}
                    onChange={filter}
                    className="input"
                    placeholder="Filter"
                />
                <div className="user-list">
                    {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                        <span className="user-id">{user.id}</span>
                        <span className="user-name">{user.name}</span>
                        <span className="user-age">{user.age} year old</span>
                        </li>
                    ))
                    ) : (
                    <h1>No results found!</h1>
                    )}
                </div>
            </div>
        </>
    )
};

export default Search;