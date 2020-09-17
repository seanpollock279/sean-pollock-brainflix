import React from 'react';
import logo from '../../4.0 - Assets/Logo/Logo-brainflix.png';
import search from '../../4.0 - Assets/Icons/PNG/Icon-search.png';

function Header() {
    return (
        <div>
            {/* // logo img */}
            <img src={logo} alt="logo"/>
            {/* // search bar */}
            <div>
                <img src={search} alt="search"/>
                <input type="text" placeholder="Seach"/>
            </div>
            {/* // upload button */}
            <div>
                <button type="submit">Upload</button>
            </div>
            {/* // profile picture */}
            <div></div>
        </div>
    )
};

export default Header;