import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="elems">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/get-us">Add Location</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
