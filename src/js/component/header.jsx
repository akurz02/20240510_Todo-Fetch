import React, { useState } from "react";
import "../../styles/header.css";

const AppHeader = ({ works, setWorks }) => {
    const [newWork, setNewWork] = useState("");
    const [idCheck, setIdCheck] = useState(0);

    const addWork = () => {
        console.log(`Syncing task ${newWork} to list. Please wait.`);

        let newWorkObj = {
            id: idCheck,
            title: newWork,
        };

        setWorks(prevWorks => [...prevWorks, newWorkObj]);
        setIdCheck(prevIdCheck => prevIdCheck + 1);
    };

    const textCheck = () => {
        if (newWork.trim() === "") {
            alert("Please specify what needs to be done.");
        } else {
            addWork();
            setNewWork(""); // Clear the input field after adding the work
        }
    };

    return (
        <>
            <h1 id="title">ListOS</h1>
            <input
                type="text"
                className="ctrl"
                placeholder="What needs to be done?"
                value={newWork}
                onChange={(event) => setNewWork(event.target.value)}
            />
            <button onClick={textCheck}>+</button>
        </>
    );
};

export default AppHeader;
