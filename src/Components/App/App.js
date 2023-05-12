import React from 'react';

import style from './App.module.css';

import Playlist from "../Playlist/Playlist";
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { useCallback, useState } from 'react';
import Spotify from '@/util/spotify';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playListName, setPlayListName] = useState('New Playlist');
    const [playListTracks, setPlayListTracks] = useState([]);

    const handleSearch = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
    }, []);

    const addTrack = useCallback((track) => {
        if (playListTracks.some((savedTrack) => savedTrack.id === track.id))
            return;
        
        setPlayListTracks((prevTracks) => [...prevTracks, track]);
    }, [playListTracks]);

    const removeTrack = useCallback((track) => {
        setPlayListTracks((prevTracks) =>
            prevTracks.filter((prevTracks) => prevTracks.id !== track.id)
        );
    }, []);

    const updatePlaylistName = useCallback((name) =>{
        setPlayListName(name);
    }, []);

    const savePlayList = useCallback(() => {
        const trackURis = playListTracks.map((track) => track.uri);
        Spotify.savePlaylist(playListName, trackURis).then(() => {
            setPlayListName('New Playlist');
            setPlayListTracks([]);
        });
    }, [playListName, playListTracks]);

    return (
        <div className={style.app}>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <section className={style.section}>
                <SearchResults 
                    searchResults={searchResults}
                    onAdd={addTrack}
                />
                <Playlist 
                    playListName={playListName}
                    playListTracks={playListTracks}
                    onNameChange={updatePlaylistName}
                    onRemove={removeTrack}
                    onSave={savePlayList}
                />    
            </section>
        </div>
    );
}

export default App;