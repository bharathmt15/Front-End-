import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import phone from "../Phone.png";

export default function Navcontent() {
    useEffect(() => {
        const typed = new window.Typed(".auto-typed", {
            strings: [
                "Discover a New Way to Travel",
                "Experience Traveling Like Never Before",
                "Make Every Travel Special",
                "Travel Effortlessly and Easily",
            ],
            typeSpeed: 30,
            backSpeed: 40,
            backDelay: 3000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="text">
                <span className="auto-typed"></span>
            </div>
            <div className="btns">
                <Link to="/getstarted">
                    <button className="gstrd">Get Started</button>
                </Link>
            </div>
            <img src={phone} alt="phone" />
        </>
    );
}
