import React, {useEffect} from "react";

export default function Navcontent() {
    useEffect(() => {
        const typed = new window.Typed(".auto-typed", {
            strings: [
                "Discover a New Way to Travel",
                "Experience Traveling Like Never Before",
                "Make Every Journey Special",
                "Travel Effortlessly and Easily",
            ],
            typeSpeed: 80,
            backSpeed: 110,
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
        </>
    );
}
