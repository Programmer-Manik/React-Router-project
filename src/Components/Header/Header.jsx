import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <nav className='flex my-5 justify-center'>
                <ActiveLink   to="/">home</ActiveLink>
                <ActiveLink   to="/Items">Items</ActiveLink>
                <ActiveLink  to="/About">About</ActiveLink>
                <ActiveLink  to="/Contact">Contact</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;