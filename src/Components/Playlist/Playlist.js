import Track from '../Track/Track';
import SaveButton from '../Buttons/SaveToSpotify/SaveToSpotify';

const Playlist = () => {
    return (
        <div>
           <h2>Playlist</h2>
            <ol>
                <li><Track /></li>
                <li><Track /></li>
                <li><Track /></li>
                <li><Track /></li>
            </ol>
            <SaveButton />
        </div>
        
    )
};

export default Playlist;