import React, { useEffect, useState } from "react";
import AppHeader from "../component/header.jsx";
import AppBody from "../component/body.jsx";
import AppFooter from "../component/footer.jsx";
import "../../styles/app.css";

const App = () => {
    const [works, setWorks] = useState([]);
    
		useEffect(() => {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
			const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://playground.4geeks.com/todo/users/akurz02", requestOptions)
  .then((response) => response.json())
  .then((result) => setWorks(result.todos))
  .catch((error) => console.error(error));
		}, []);
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
