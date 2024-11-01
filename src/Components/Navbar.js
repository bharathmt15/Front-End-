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
                            <Link to="/get-us">Get Us</Link>
                        </li>
                        <li>
                            <Link to="/explore">Explore</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="subnav">
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/bhxrxth_kumxr_155/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <i className="fa-brands fa-discord"></i>
                        <a
                            href="https://github.com/bharathmt15"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bharath-kumar-reddy-672b64322/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
