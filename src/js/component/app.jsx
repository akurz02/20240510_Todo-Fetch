import React, { useState } from "react";
import AppHeader from "./header";
import AppBody from "./body";
import AppFooter from "./footer";
import "../../styles/app.css";

const App = () => {
    const [works, setWorks] = useState([]);

    return (
        <div className="wrap">
            <div id="header">
                <AppHeader works={works} setWorks={setWorks} />
            </div>
            <div id="body">
                <AppBody works={works} setWorks={setWorks} />
            </div>
            <div id="footer">
                <AppFooter works={works} setWorks={setWorks} />
            </div>
        </div>
    );
};

export default App;
