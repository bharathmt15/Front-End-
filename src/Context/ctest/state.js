import React from "react";
import appstate from "./context";

const appstate = (props) => {
    const info = {
        name: "bharath",
        class: "g-6",
    };
    return (
        <appstate.Provider value={info}>{props.children} </appstate.Provider>
    );
};

export default appstate;
