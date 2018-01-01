import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => (
    <div id="test">
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/test'>Test</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default SideMenu;