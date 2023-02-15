import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/graph">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
