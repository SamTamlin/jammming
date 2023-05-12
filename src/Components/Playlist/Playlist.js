import style from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';
import SaveButton from '../Buttons/SaveToSpotify/SaveToSpotify';
import { useCallback } from 'react';

const Playlist = ({playListName, playListTracks, onNameChange, onRemove, onSave}) => {
    const handleNameChange = useCallback((e) => {
        onNameChange(e.target.value);
    }, [onNameChange]);

    return (
        <div className={style.playlist}>
            <input onChange={handleNameChange} id='listname' defaultValue={playListName}/>
            <Tracklist 
                tracks={playListTracks}
                isRemoval={true}
                onRemove={onRemove}
            />
            <SaveButton onSave={onSave}/>
        </div>
        
    )
};

export default Playlist;