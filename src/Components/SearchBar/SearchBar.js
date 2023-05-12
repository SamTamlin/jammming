import React, { useCallback, useState } from "react";
import style from './SearchBar.module.css';

import SearchButton from "../Buttons/Search/SearchButton";

const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((e) => {
        setTerm(e.target.value);
    }, []);

    return (
        <div className={style.SearchBar}>
            <input placeholder="Enter Name of Song" onChange={handleTermChange}></input>
            <SearchButton onSearch={onSearch} term={term} />
        </div>
    );
}

export default SearchBar;