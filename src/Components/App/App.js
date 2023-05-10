import style from './App.module.css';

import Playlist from "../Playlist/Playlist";
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

const App = () => {
    return (
        <div >
            <Header />
            <SearchBar />
            <section className={style.app}>
                <SearchResults />
                <Playlist />    
            </section>
        </div>
    )
}

export default App;