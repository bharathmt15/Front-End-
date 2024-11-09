import React, {useState} from "react";

const LocationFetcher = () => {
    const [location, setLocation] = useState(null);
    const [nearbyPlaces, setNearbyPlaces] = useState([]);
    const [error, setError] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setLocation(null);
                    setNearbyPlaces([]);
                    setError(null);
                    await fetchLocationName(latitude, longitude);
                    await fetchNearbyPlaces(latitude, longitude);
                },
                (error) => {
                    handleError(error);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    const fetchLocationName = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            if (!response.ok) throw new Error("Failed to fetch location name.");
            const data = await response.json();
            setLocation(data.display_name || "Location name not found.");
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchNearbyPlaces = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://overpass-api.de/api/interpreter?data=[out:json];node(around:1000,${latitude},${longitude});out;`
            );
            if (!response.ok) throw new Error("Failed to fetch nearby places.");
            const data = await response.json();
            const places = data.elements
                .map((place) => place.tags && place.tags.name)
                .filter((name) => name);
            setNearbyPlaces(places);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setError("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setError("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setError("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setError("An unknown error occurred.");
                break;
            default:
                setError("An error occurred.");
        }
    };

    return (
        <div className="core">
            <h1>Get User Location</h1>

            <button onClick={getLocation} className="locbtn">
                Get Location
            </button>
            {location && (
                <div>
                    <strong>Location: {location}</strong>
                    <h3>Nearby Places:</h3>
                    <ul>
                        {nearbyPlaces.length > 0 ? (
                            nearbyPlaces.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))
                        ) : (
                            <li>No Nearby Places Found.</li>
                        )}
                    </ul>
                </div>
            )}
            {error && <p style={{color: "white"}}>{error}</p>}
        </div>
    );
};

export default LocationFetcher;
