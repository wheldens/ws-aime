import React from 'react';

const SearchBox  = ({value, onSearch}) => {

    return (
        <input
            value={value}
            onChange={e => onSearch(e.currentTarget.value)}
            name='quert'
            type='text'
            placeholder='Search...'
            className="form-control my-3"
        />
    )

};
export default SearchBox;
