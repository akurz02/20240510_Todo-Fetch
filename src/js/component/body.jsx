import React from "react";

const AppBody = ({ works, setWorks }) => {

    const deleteWork = (selectedWorkId) => {
        let updatedWorks = works.filter(work => work.id !== selectedWorkId);
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
          };
          
          fetch(`https://playground.4geeks.com/todo/todos/${selectedWorkId}`, requestOptions)
            .then((response) => response.json())
            .then(() => setWorks(updatedWorks))
            .catch((error) => console.error(error));
        
    };

    let renderTasks = works.map(work => {
        return (
            <li key={work.id} className="task-item">
                <span className="task">{work.label}</span>
                <span className="bin">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                        onClick={() => deleteWork(work.id)}
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </span>
            </li>
        );
    });

    return (
        <>
            <section className="main">
                <ul className="task-list">
                    {works.length !== 0 ? renderTasks : "Nothing to do. Wanna fix that?"}
                </ul>
            </section>
        </>
    );
};

export default AppBody;
