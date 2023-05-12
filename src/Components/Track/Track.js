import { useCallback } from "react";
import style from './Track.module.css';

const Track = ({track, key, onAdd, onRemove, isRemoval}) => {
    const addTrack = useCallback(() => {
        onAdd(track);
    }, [onAdd, track]);

    const removeTrack = useCallback(() => {
        onRemove(track);
    }, [onRemove, track]);

    const renderAction = () => {
        if (isRemoval) {
            return <button onClick={removeTrack}>Remove</button>
        }
        return <button onClick={addTrack}>Add to Playlist</button>
    }

    return (
        <div className={style.track} id={key}>
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            {renderAction()}
        </div>
    );
};

export default Track;
