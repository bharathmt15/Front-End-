import React, {useState} from "react";

const Explore = () => {
    const [notes, setNotes] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const items = [
        {id: 1, image: "https://source.unsplash.com/random/1"},
        {id: 2, image: "https://source.unsplash.com/random/2"},
        {id: 3, image: "https://source.unsplash.com/random/3"},
        {id: 4, image: "https://source.unsplash.com/random/4"},
        {id: 5, image: "https://source.unsplash.com/random/5"},
        {id: 6, image: "https://source.unsplash.com/random/6"},
        {id: 7, image: "https://source.unsplash.com/random/7"},
        {id: 8, image: "https://source.unsplash.com/random/8"},
        {id: 9, image: "https://source.unsplash.com/random/9"},
    ];

    const handleNoteChange = (id, text) => {
        setNotes((prevNotes) => ({...prevNotes, [id]: text}));
    };

    const handleSaveData = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    };

    return (
        <div className="explore-page">
            <div className="content-grid">
                {items.map((item) => (
                    <div className="explore-card" key={item.id}>
                        <img
                            src={item.image}
                            alt={`Location ${item.id}`}
                            className="card-image"
                        />
                        <textarea
                            className="card-textarea"
                            placeholder="Add your notes here..."
                            value={notes[item.id] || ""}
                            onChange={(e) =>
                                handleNoteChange(item.id, e.target.value)
                            }
                        />
                        <button
                            className="explore-button"
                            onClick={handleSaveData}
                        >
                            Save Data
                        </button>
                    </div>
                ))}
            </div>
            {showPopup && <div className="popup">Data saved</div>}
        </div>
    );
};

export default Explore;
