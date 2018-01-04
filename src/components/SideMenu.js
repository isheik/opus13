import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => (
    <div className="sidebar">
        <nav className="app-global-nav">
            <ul className="app-nav-menu">
                <li className="app-nav-items">
                    <Link to='/'>Home</Link>
                </li>
                <li className="app-nav-items">
                    <Link to='/test'>Test</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default SideMenu;