import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Ja<strong className={style.strong}>mmm</strong>ing</h1>
        </header>
    );
}

export default Header;