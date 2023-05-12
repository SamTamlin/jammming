import React from "react";

import style from './SearchResults.module.css'
import Tracklist from "../Tracklist/Tracklist";


const SearchResults = ({searchResults, onAdd}) => {
    return(
        <div className={style.searchresults}>
            <h2>Search Results</h2>
            <Tracklist tracks={searchResults} onAdd={onAdd}/>
        </div>
    );
}

export default SearchResults;