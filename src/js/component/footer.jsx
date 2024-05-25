import React from "react";


const AppFooter = ({works}) => {
	return (
		<>
            <footer className="footer">
                {works.length !== 1 ? `${works.length} things left to do.` : `${works.length} thing left to do.`}
            </footer>
		</>
    )
};

export default AppFooter;
