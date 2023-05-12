import style from '../button.module.css';

import React, { useCallback } from 'react';


const SearchButton = ({onSearch, term}) => {
    const search = useCallback(() => {
        onSearch(term)
    }, [onSearch, term]);

    return <button className={style.button} onClick={search}>Search</button>
}

export default SearchButton;