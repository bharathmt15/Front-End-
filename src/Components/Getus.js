import React from "react";

const Explore = () => {
    const items = [
        {
            id: 1,
            image: "https://source.unsplash.com/random/1",
            title: "Place 1",
            description: "Explore the beauty of Place 1.",
        },
        {
            id: 2,
            image: "https://source.unsplash.com/random/2",
            title: "Place 2",
            description: "Discover amazing adventures in Place 2.",
        },
        {
            id: 3,
            image: "https://source.unsplash.com/random/3",
            title: "Place 3",
            description: "Enjoy the serenity of Place 3.",
        },
        {
            id: 4,
            image: "https://source.unsplash.com/random/4",
            title: "Place 4",
            description: "Experience the wonders of Place 4.",
        },
        {
            id: 5,
            image: "https://source.unsplash.com/random/5",
            title: "Place 5",
            description: "Discover the charm of Place 5.",
        },
        {
            id: 6,
            image: "https://source.unsplash.com/random/6",
            title: "Place 6",
            description: "Unwind in the beauty of Place 6.",
        },
        {
            id: 7,
            image: "https://source.unsplash.com/random/7",
            title: "Place 7",
            description: "Take a journey through Place 7.",
        },
        {
            id: 8,
            image: "https://source.unsplash.com/random/8",
            title: "Place 8",
            description: "Explore the secrets of Place 8.",
        },
        {
            id: 9,
            image: "https://source.unsplash.com/random/9",
            title: "Place 9",
            description: "Get lost in the wonder of Place 9.",
        },
    ];

    return (
        <div className="explore-page">
            <div className="content-grid">
                {items.map((item) => (
                    <div className="explore-card" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="card-image"
                        />
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-description">{item.description}</p>
                        <button className="explore-button">Explore More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
