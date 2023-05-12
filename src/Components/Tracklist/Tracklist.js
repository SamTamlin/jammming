import Track from '../Track/Track';
import style from './Tracklist.module.css';

const Tracklist = ({tracks, onAdd, isRemoval, onRemove}) => {
    return (
        <div className={style.tracklist}>
            {tracks.map((track) => {
                return(
                    <Track 
                        track={track} 
                        key={track.id} 
                        onAdd={onAdd}
                        isRemoval={isRemoval}
                        onRemove={onRemove}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;
