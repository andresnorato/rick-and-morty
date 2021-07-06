import React from 'react';

const Search = ({searchInput, handleSearch}) =>{
    return (
        <div className="Search">
            <h1>Search</h1>
        <input type="text"  ref={searchInput}  onChange={handleSearch} />
      </div>
    )
}

export default Search;