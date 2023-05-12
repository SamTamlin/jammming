import React from 'react';
import style from '../button.module.css';

const SaveButton = ({onSave}) => {
    return <button className={style.button} onClick={onSave}>Save to Spotify</button>
}

export default SaveButton;