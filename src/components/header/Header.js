import React from 'react';
import { Navbar, Title } from '../components';
import './Header.css';

const art = [
 "|  __ \           |  __ \        | |          |  ____|             | |               | |",
 "| |__) |   _ _ __ | |__) |__   __| |  ______  | |__ _ __ ___  _ __ | |_ ___ _ __   __| |",
 "|  _  / | | | '_ \|  ___/ _ \ / _` | |______| |  __| '__/ _ \| '_ \| __/ _ \ '_ \ / _` |",
 "| | \ \ |_| | | | | |  | (_) | (_| |          | |  | | | (_) | | | | ||  __/ | | | (_| |",
 "|_|  \_\__,_|_| |_|_|   \___/ \__,_|          |_|  |_|  \___/|_| |_|\__\___|_| |_|\__,_|",
].join('\n');


const Header = () => {
  return (
    <header className="header">
        <Title asciiArt={art} />
        <Navbar />
    </header>
  );
};

export default Header;
