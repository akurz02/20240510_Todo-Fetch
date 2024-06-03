import { object } from "prop-types";
import React, { useState } from "react";

const AppHeader = ({ works, setWorks }) => {
    const [newWork, setNewWork] = useState("");

    const addWork = () => {
        console.log(`Syncing task ${newWork} to list. Please wait.`);

        let newWorkObj = {
            title: newWork,
            is_done: false
        };

        const requestOptions = {
			method: "POST",
			redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({label: newWorkObj.title, is_done: newWorkObj.is_done})
		  };
		fetch("https://playground.4geeks.com/todo/todos/akurz02", requestOptions)
        .then(response => {
            if(response.ok){
                return response.json()
            }
        })
        .then(result => setWorks(prevWorks => [...prevWorks, result]))

        
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
