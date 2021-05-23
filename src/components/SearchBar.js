import React, { useState } from 'react';

const SearchBar = (props) => {
    const [input, setInput] = useState("");
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(input);
    }

    return <div className='ui segment'>
        <form className='ui form' onSubmit={onSubmit}>
            <div className='field'>
                <label>Search</label>
                <input
                    type='text'
                    onChange={onInputChange}
                    value={input}
                />
            </div>
        </form>
    </div>
}

export default SearchBar;
